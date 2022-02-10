import "../styles/ArticleCard.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { patchVotes } from "../utils/api";
import moment from "moment";

const ArticleCard = ({
  articleData,
  name,
  author,
  topic,
  commentCount,
  createdAt,
  votes,
  thumb,
  article_id,
}) => {
  const [voteCount, setVoteCount] = useState({ inc_votes: 1 });

  const handleVoteCount = (event) => {
    event.preventDefault();
    patchVotes(article_id, voteCount)
      .then((res) => {
        setVoteCount((voteCount.votes = voteCount.inc_votes += 1));

        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <section className="Article-Container">
      {articleData && (
        <>
          <Link
            key={`${article_id}`}
            className="article-link"
            to={`/article/${article_id}`}
          >
            <div className="top-container">
              <div className="ArticleCard_author">Author: {author}</div>
              <div className="ArticleCard_commentCount">
                Comments: ({commentCount})
              </div>
              <div className="ArticleCard_votes">{votes} Votes</div>
              <div onClick={handleVoteCount} className="ArticleCard_thumb">
                {thumb}
              </div>
            </div>
            <div className="ArticleCard_name">{name}</div>

            <div className="bottom-container">
              <div className="ArticleCard_topic">Topic: {topic}</div>

              <div className="ArticleCard_createdAt">
                {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
              </div>
            </div>
          </Link>
        </>
      )}
    </section>
  );
};

export default ArticleCard;
