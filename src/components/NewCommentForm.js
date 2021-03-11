import React, { useState } from "react";

function NewCommentForm({
  site,
  comments,
  setComments,
  setHiddenForm,
  setHiddenShowForm,
}) {
  console.log("ni hao", site);
  const [commentForm, setCommentForm] = useState({
    user_id: 1,
    site_id: site.id,
    content: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/comments", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(commentForm),
    })
      .then((r) => r.json())
      .then((data) => {
        const newComments = [...comments, data];
        setComments(newComments);
        setHiddenForm(true);
        setHiddenShowForm(false);
      });
  }

  function updateFormState(e) {
    const updatedFormState = { ...commentForm };
    updatedFormState[e.target.name] = e.target.value;
    setCommentForm(updatedFormState);
    console.log(updatedFormState);
  }

  return (
    <form onSubmit={handleSubmit}>
      <div class="form-group">
        <label for="formGroupExampleInput">Add a Comment</label>
        <input
          type="text"
          name="content"
          value={commentForm.content}
          class="form-control"
          id="formGroupExampleInput"
          placeholder="Add a comment..."
          onChange={updateFormState}
        />
        <button type="submit" class="btn btn-outline-secondary submit">
          Submit
        </button>
      </div>
    </form>
  );
}

export default NewCommentForm;
