import React, { useState } from "react";
import EditMessage from "./EditMessage";

function ContentCard({
  content,
  setComments,
  id,
  comments,
  comment,
  onUpdateMessage,
  setHiddenShowForm,
}) {
  const [isEditing, setIsEditing] = useState(false);

  function handleDeleteClick() {
    const requestOptions = {
      method: "DELETE",
    };
    fetch(`http://localhost:3000/comments/${id}`, requestOptions);
    setComments(comments.filter((fav) => comment.id !== id));
  }

  function handleUpdateMessage(updatedMessage) {
    setIsEditing(false);
    onUpdateMessage(updatedMessage);
  }

  return (
    <div>
      {/* <p>{content}</p> */}
      {isEditing ? (
        <EditMessage
          onUpdateMessage={handleUpdateMessage}
          id={id}
          comments={comments}
          setComments={setComments}
          comment={comment}
          content={content}
          setHiddenShowForm={setHiddenShowForm}
        />
      ) : (
        <p>{content}</p>
      )}
      <button
        className="btn btn-outline-secondary"
        onClick={() => setIsEditing((isEditing) => !isEditing)}
      >
        <span role="img" aria-label="edit">
          ✏️
        </span>
      </button>
      <button className="btn btn-outline-secondary" onClick={handleDeleteClick}>
        <span role="img" aria-label="delete">
          🗑
        </span>
      </button>
    </div>
  );
}

export default ContentCard;

// className="actions"
