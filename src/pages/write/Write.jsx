import React from "react"
import "./write.css"
import pool from "../../Image/pool.jpg";

function Write() {
    return (
        <div className="write">
            <img className="writeImg"
             src={pool} alt=""/>
        <form className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}} />
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
            </div>
            <div className="witeFormGroup">
                <textarea placeholder="Tell your story.." type="text" className="writeInput writeText">
                </textarea>          
                </div>
                <button className="writeSubmit">Publish</button>
        </form>

        </div>
    )
}

export default Write;