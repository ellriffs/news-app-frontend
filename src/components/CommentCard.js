import "../styles/CommentCard.css";
import moment from "moment";

const CommentCard = ({ body, author, createdAt, votes }) => {
  return (
    <div>
      <ul className=" comment-list">
        <li>{author}</li>
        <li>{body}</li>
        <li>{moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}</li>
        <li>{votes}</li>
      </ul>
    </div>
  );
};

export default CommentCard;
