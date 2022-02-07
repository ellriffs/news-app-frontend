import '../styles/ArticleCard.css';
import moment from 'moment';

const ArticleCard = ({
  articleData,
  name,
  author,
  topic,
  commentCount,
  createdAt,
}) => {
  return (
    <section className="Article-Container">
      {articleData && (
        <>
          <div className="ArticleCard_name">{name}</div>
          <div className="ArticleCard_author">Author: {author}</div>
          <div className="ArticleCard_topic">Topic: {topic}</div>
          <div className="ArticleCard_commentCount">
            Comments: {commentCount}
          </div>
          <div className="ArticleCard_createdAt">
            {moment(createdAt).format('MMMM Do YYYY, h:mm:ss a')}
          </div>
        </>
      )}
    </section>
  );
};

export default ArticleCard;
