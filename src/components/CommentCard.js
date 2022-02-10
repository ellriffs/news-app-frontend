import "../styles/CommentCard.css";
import { deleteComment } from "../utils/api";
import moment from "moment";

const CommentCard = ({ comment_id, body, author, createdAt, votes }) => {
  const handleDelete = (event) => {
    event.preventDefault();
    deleteComment(comment_id)
      .then((res) => {
        alert("Comment Deleted Successfully 🎉 ");
        console.log(res);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        alert("Cannot Delete. Please Try again");
      });
  };

  return (
    <form onSubmit={handleDelete}>
      <ul className=" comment-list">
        <div className="CommentCard_attributes">
          <li className="CommentCard_author">Author: {author}</li>
          <li className="CommentCard_votes">Votes {votes}</li>
          <li className="CommentCard_voteUp">⬆</li>
          <li className="CommentCard_voteDown">⬇</li>
        </div>
        <li className="CommentCard_body">{body}</li>
        <li className="CommentCard_posted">
          Posted: {moment(createdAt).format("MMMM Do YYYY, h:mm:ss a")}
        </li>
        <button className="delete-comment">Delete Comment</button>
      </ul>
    </form>
  );
};

export default CommentCard;
