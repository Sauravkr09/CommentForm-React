import { useState } from "react";
import "./Comment.css";
import CommentsForm from "./CommentsForm";

export default function Comment() {
  let [comments, setComments] = useState([
    {
      username: "@saurav",
      remarks: "good",
      rating: 4,
    },
  ]);

  let addNewComment = (comment) => {
    setComments((currComments) => [...currComments, comment]);
  };

  return (
    <>
      <div>
        <h2>All Comments</h2>
        {comments.map((comment, idx) => (
          <div className="comment" key={idx}>
            <span>remarks= {comment.remarks}</span>
            &nbsp;
            <span>(rating= {comment.rating})</span>
            <p>- {comments.username}</p>
          </div>
        ))}
      </div>
      <hr />
      <CommentsForm addNewComment={addNewComment} />
    </>
  );
}
