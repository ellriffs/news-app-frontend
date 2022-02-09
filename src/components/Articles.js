import ArticleCard from "./ArticleCard";
import "../styles/Article.css";
import { useState, useEffect } from "react";
import { getArticles } from "../utils/api";

const Articles = ({ topicsValue }) => {
  const [articleData, setArticleData] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    getArticles(topicsValue)
      .then((article) => {
        setTimeout(() => {
          setArticleData(article);
          isLoading(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [topicsValue]);

  return (
    <>
      <h1 className="content-title">Latest Articles:</h1>
      <section className="Content-Container">
        {!loading ? (
          <>
            <h1 className="loading">Loading...</h1>
            <div className="circle">🌎</div>
          </>
        ) : (
          articleData &&
          articleData.map((content) => {
            return (
              <ArticleCard
                key={content.article_id}
                id={content.article_id}
                name={content.title}
                author={content.author}
                topic={content.topic}
                commentCount={content.comment_count}
                createdAt={content.created_at}
                votes={content.votes}
                thumb="👍"
                articleData={articleData}
              />
            );
          })
        )}
      </section>
    </>
  );
};

export default Articles;
