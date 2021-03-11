import React from "react";

function TextileCard({ textile }) {
  //   console.log("finale", textileSites);

  // const allDaTextileSites = textileSites.map((textile) => textile.ig);

  return (
    <div className="col-md-4">
      {/* <h1>{textile.ig}</h1> */}
      <div className="card">
        <img
          className="card-img-top"
          src={textile.image}
          // style={{ width: "50px", height: "auto" }}
        />
        <div className="card-body">
          <h4 className="card-title">{textile.name}</h4>
          <p className="card-text">
            {textile.address}, {textile.borough}
          </p>
          {/* <a href="#" className="btn btn-outline-secondary">
            <Link to={`/sites/${id}`}> View More Information</Link>
          </a> */}

          <br />
          {/* <button onClick={hideForm} className="btn btn-outline-secondary">
            {hiddenForm ? "Add new comment" : "No comment"}
          </button> */}
          {/* {hiddenForm ? null : (
            <NewCommentForm
              site={site}
              setComments={setComments}
              comments={comments}
              setHiddenForm={setHiddenForm}
              setHiddenShowForm={setHiddenShowForm}
            />
          )} */}
          {/* <button onClick={hideShowForm} className="btn btn-outline-secondary">
            {hiddenShowForm ? "View Comments" : "Hide Comments"}
          </button> */}
          {/* {hiddenShowForm ? null : (
            <CommentCard
              onUpdateMessage={handleUpdateMessage}
              site={site}
              setComments={setComments}
              comments={comments}
              setHiddenShowForm={setHiddenShowForm}
            />
          )} */}
        </div>
        {/* <Switch>
    <Route exact path="/site">
      <SitePage site={site} />
    </Route>
  </Switch> */}
      </div>
    </div>
  );
}
export default TextileCard;
