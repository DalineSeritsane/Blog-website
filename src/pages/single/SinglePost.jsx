import React from 'react'
import "./singlePost.css";
import BodyWater from "../../Image/BodyWater.jpg";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img className="singlePostImg" src={BodyWater} alt='' />
        <h1 className="singlePostTitle">Lorem ipsum dolor si.
            <div className="singlePostEdit">
             <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
             <i className="singlePostIcon fa-solid fa-trash"></i>
            </div>
        </h1>
        <div className="singlePostInfo">
            <span className="singlePostAuthor">Author: <b>Swarts</b></span>
            <span className="singlePostDate">1 hour ago</span>
        </div>

      </div>
    </div>
  )
}
export default SinglePost;