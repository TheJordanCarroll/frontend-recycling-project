import React, { useState } from "react";

function EditMessage({ id, content, onUpdateMessage }) {
  const [messageBody, setMessageBody] = useState(content);

  function handleFormSubmit(e) {
    e.preventDefault();

    const data = {
      message: {
        content: messageBody,
      },
    };
    console.log(data);
    console.log("subbbb", id);

    fetch(`http://localhost:3000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      content: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="content"
        autoComplete="off"
        value={messageBody}
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input type="submit" value="Save" />
    </form>
  );
}

export default EditMessage;
