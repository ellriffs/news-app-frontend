import "../styles/fullArticle.css";
import CommentCard from "./CommentCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getComment, getSingleArticle, postComment } from "../utils/api";

const FullArticle = () => {
  const { article_id } = useParams();

  const [fullArticleData, setFullArticleData] = useState([]);
  const [commentData, setCommentData] = useState([]);
  const [loading, isLoading] = useState(false);
  const [inputValue, setInputValue] = useState({
    article_id: `${article_id}`,
    author: "",
    body: "",
    created_at: Date(),
    votes: 0,
  });

  const handleInputValue = (event) => {
    setInputValue((currValue) => {
      const newInput = { ...currValue };
      if (event.target.className === "body_input") {
        newInput.body = event.target.value;
      } else if (event.target.className === "author_input") {
        newInput.author = event.target.value;
      }
      return newInput;
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    postComment(article_id, inputValue)
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSingleArticle(article_id)
      .then((singleArticle) => {
        setTimeout(() => {
          setFullArticleData(singleArticle);
          isLoading(true);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  useEffect(() => {
    getComment(article_id)
      .then((comments) => {
        setTimeout(() => {
          isLoading(true);
          setCommentData(comments);
        }, 2000);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  return (
    <>
      {!loading && fullArticleData ? (
        <>
          <h1 className="loading">Loading...</h1>
          <div className="circle">🌎</div>
        </>
      ) : (
        <article>
          <div className="full-article-container">
            <div className="attributes-block">
              <div className="FullArticle_author">
                Author: {fullArticleData.author}
              </div>
              <div className="FullArticle_topic">
                Topic: {fullArticleData.topic}
              </div>
              <div className="FullArticle_votes">
                votes: {fullArticleData.votes}
              </div>
            </div>
            <div className="FullArticle_title">{fullArticleData.title}</div>
            <div className="FullArticle_body">{fullArticleData.body}</div>
          </div>
          <div className="comment-container">
            <form onSubmit={handleSubmit}>
              <input
                required
                onChange={handleInputValue}
                className="author_input"
                type="text"
                placeholder="add name here"
              ></input>
              <input
                required
                onChange={handleInputValue}
                className="body_input"
                type="text"
                placeholder="add comment here"
              ></input>
              <button>Submit</button>
            </form>
            <ul>
              {commentData.map((comments) => {
                return (
                  <CommentCard
                    key={comments.comment_id}
                    body={comments.body}
                    author={comments.author}
                    createdAt={comments.created_at}
                    votes={comments.votes}
                  />
                );
              })}
            </ul>
          </div>
        </article>
      )}
    </>
  );
};

export default FullArticle;
