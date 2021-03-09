import React, { useState } from "react";

function EditMessage({ id, content, onUpdateMessage, setHiddenShowForm }) {
  const [messageBody, setMessageBody] = useState(content);

  function handleFormSubmit(e) {
    e.preventDefault();

    const data = {
      content: messageBody,
    };
    console.log(data);
    console.log("subbbb", id);

    fetch(`http://localhost:3000/comments/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => r.json())
      .then((data) => onUpdateMessage(data));
    // setHiddenShowForm(true);
  }

  return (
    <form className="edit-message" onSubmit={handleFormSubmit}>
      <input
        type="text"
        name="content"
        autoComplete="off"
        value={messageBody}
        class="form-control"
        id="formGroupExampleInput"
        onChange={(e) => setMessageBody(e.target.value)}
      />
      <input class="btn btn-outline-secondary" type="submit" value="Save" />
    </form>
  );
}

export default EditMessage;
