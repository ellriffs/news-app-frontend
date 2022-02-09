import "../styles/fullArticle.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const FullArticle = () => {
  const { article_id } = useParams();
  console.log(article_id);

  const [fullArticleData, setFullArticleData] = useState([]);
  const [commentData, setCommentData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get(
  //       `https://ellriffs-api.herokuapp.com/api/articles/${article_id}/comments`
  //     )
  //     .then((res) => {
  //       setCommentData(res.data.comments);
  //       console.log(commentData);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, [article_id]);

  useEffect(() => {
    axios
      .get(`https://ellriffs-api.herokuapp.com/api/articles/${article_id}`)
      .then((res) => {
        setFullArticleData(res.data.article);
        console.log(fullArticleData);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [article_id]);

  console.log(fullArticleData);

  return (
    <>
      <article className="article-container">
        <div>{fullArticleData.author}</div>
        <div>{fullArticleData.topic}</div>
        <div>votes: {fullArticleData.votes}</div>
        <div>{fullArticleData.title}</div>
        <div>{fullArticleData.body}</div>
      </article>
      <section className="commentContainer">
        {commentData.map((comments) => {
          return (
            <>
              <li>{comments.comment_id}</li>
              <li>{comments.author}</li>
              <li>{comments.body}</li>
              <li>{comments.created_at}</li>
              <li>{comments.votes}</li>
            </>
          );
        })}
      </section>
    </>
  );
};

export default FullArticle;
