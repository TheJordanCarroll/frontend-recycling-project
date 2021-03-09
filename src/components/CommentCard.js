import React, { useState } from "react";
import ContentCard from "./ContentCard";

function CommentCard({ site, comments, setComments }) {
    const allComments = comments.filter ((comment) => comment.site.id == site.id)
    // set_fav_sites(fav_sites.filter ((fav) => fav.id !== id))
    return (
        <div classname="comment-map">
            {allComments.map(comment => {
                return <ContentCard key={comment.id} content={comment.content} setComments={setComments}/>;
            })}
        </div>
    );
    // <form onSubmit={handleSubmit}>
    //     <div class="form-group">
    //         <label for="formGroupExampleInput">Add a Comment</label>
    //         <input 
    //             type="text" 
    //             name="content"
    //             value={commentForm.content}
    //             class="form-control" 
    //             id="formGroupExampleInput" 
    //             placeholder="Add a comment..."
    //             onChange={updateFormState}
    //         />
    //         <button type="submit" class="btn btn-outline-secondary">Submit</button>
    //     </div>
    // </form>
}

export default CommentCard;