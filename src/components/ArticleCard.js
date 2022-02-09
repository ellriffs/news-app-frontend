import "../styles/ArticleCard.css";
import { Link } from "react-router-dom";
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
  id,
}) => {
  return (
    <section className="Article-Container">
      {articleData && (
        <>
          <Link key={`${id}`} className="article-link" to={`/article/${id}`}>
            <div className="top-container">
              <div className="ArticleCard_author">Author: {author}</div>
              <div className="ArticleCard_commentCount">
                Comments: ({commentCount})
              </div>
              <div className="ArticleCard_votes">{votes} Votes</div>
              <div className="ArticleCard_thumb">{thumb}</div>
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
