import ArticleCard from "./ArticleCard";
import "../styles/Article.css";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { getArticles, getArticlesViaTopics } from "../utils/api";

const Articles = ({ sortValue }) => {
  const [articleData, setArticleData] = useState([]);
  const [loading, isLoading] = useState(false);
  const { search } = useLocation();
  const queryParams = search.split("=")[1];

  useEffect(() => {
    if (queryParams) {
      getArticlesViaTopics(queryParams, sortValue).then((articles) => {
        setTimeout(() => {
          setArticleData(articles, sortValue);
          isLoading(true);
        }, 1000);
      });
    } else {
      getArticles(sortValue)
        .then((article) => {
          setTimeout(() => {
            setArticleData(article);
            isLoading(true);
          }, 1000);
        })

        .catch((err) => {
          console.log(err);
        });
    }
  }, [sortValue, queryParams]);

  console.log(sortValue);

  return (
    <>
      {!queryParams ? (
        <h1 className="content-title">All Articles:</h1>
      ) : (
        <h1 className="content-title">
          {queryParams[0].toUpperCase() + queryParams.slice(1)}:
        </h1>
      )}
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
                article_id={content.article_id}
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
