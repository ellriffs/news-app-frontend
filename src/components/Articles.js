import ArticleCard from "./ArticleCard";
import "../styles/Article.css";
import { useState, useEffect } from "react";
import axios from "axios";

const Articles = ({ topicsValue }) => {
  const [articleData, setArticleData] = useState([]);
  const [loading, isLoading] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://ellriffs-api.herokuapp.com/api/articles?topic=${topicsValue}`
      )
      .then((res) => {
        setTimeout(() => {
          setArticleData(res.data.articles);
          console.log(articleData);
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
