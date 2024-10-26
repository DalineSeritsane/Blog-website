import React from 'react'
import "./post.css";
import france from "../Image/france.jpg";
import BodyWater from "../Image/BodyWater.jpg"; 

 function Post() {
  return (
    <div className="post">
        <img className= "postImg"
        src={france} alt='' />
        <div className="postInfo">
          <div className="postCats">
            <span className="postCat">Paris</span>
            <span className="postCat">Beaches</span>
          </div>
          <span className="postTitle">Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
          </span>
          <hr />
          <span className="postDate">1 houre ago</span>
        </div>
        <p className= "postDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque alias architecto, libero facere placeat voluptates! Cum minima sint incidunt id nisi, modi enim ducimus illo sapiente. Labore, doloribus eius. Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque alias architecto, libero facere placeat voluptates! Cum minima sint incidunt id nisi, modi enim ducimus illo sapiente. Labore, doloribus eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque alias architecto, libero facere placeat voluptates! Cum minima sint incidunt id nisi, modi enim ducimus illo sapiente. Labore, doloribus eius.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga itaque alias architecto, libero facere placeat voluptates! Cum minima sint incidunt id nisi, modi enim ducimus illo sapiente. Labore, doloribus eius.
          </p>
      
    </div>
  )
};
export default Post;