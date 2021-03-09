import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NewCommentForm from "./NewCommentForm.js";
import CommentCard from "./CommentCard.js";

function SiteCard({ site, favs, set }) {
  const { id, name, borough, image, address } = site;
  const [isFavorite, setIsFavorite] = useState(false);
  const [hiddenForm, setHiddenForm] = useState(true);
  const [hiddenShowForm, setHiddenShowForm] = useState(true);
  const [comments, setComments] = useState([]);
  const current_user_id = 1;

  function toggleFav(e) {
    setIsFavorite(!isFavorite);
    handleSubmit(e);
  }

  useEffect(() => {
    fetch("http://localhost:3000/comments")
      .then((r) => r.json())
      .then((data) => setComments(data));
  }, []);

  function hideForm() {
    setHiddenForm(!hiddenForm);
  }

  function hideShowForm() {
    setHiddenShowForm(!hiddenShowForm);
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://localhost:3000/user_sites", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ user_id: current_user_id, site_id: id }),
    })
      .then((r) => r.json())
      .then((data) => {
        const newFav = [...favs, data];
        set(newFav);
      });
  }

  function handleUpdateMessage(updatedCommentObj) {
    // console.log(updateCommentObj);
    const updatedComments = comments.map((comment) => {
      if (comment.id === updatedCommentObj.id) {
        return updatedCommentObj;
      } else {
        return comment;
      }
    });
    setComments(updatedComments);
  }

  return (
    <div className="col-md-4">
      <div className="card">
        <img
          className="card-img-top"
          src={image}
          style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">
            {address}, {borough}
          </p>
          <a href="#" className="btn btn-outline-secondary">
            <Link to="/site"> View More Information</Link>
          </a>

          {isFavorite ? (
            <button onClick={toggleFav} className="btn btn-outline-secondary">
              ★
            </button>
          ) : (
            <button onClick={toggleFav} className="btn btn-outline-secondary">
              ☆
            </button>
          )}
          <br />
          <button onClick={hideForm} className="btn btn-outline-secondary">
            {hiddenForm ? "Add new comment" : "No comment"}
          </button>
          {hiddenForm ? null : (
            <NewCommentForm
              site={site}
              setComments={setComments}
              comments={comments}
              setHiddenForm={setHiddenForm}
              setHiddenShowForm={setHiddenShowForm}
            />
          )}
          <button onClick={hideShowForm} className="btn btn-outline-secondary">
            {hiddenShowForm ? "View Comments" : "Hide Comments"}
          </button>
          {hiddenShowForm ? null : (
            <CommentCard
              onUpdateMessage={handleUpdateMessage}
              site={site}
              setComments={setComments}
              comments={comments}
              setHiddenShowForm={setHiddenShowForm}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default SiteCard;
