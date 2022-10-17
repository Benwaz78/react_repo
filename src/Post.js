import React from "react"; 
import "./App.css";


function Post({ name, content}){

    return(
        <div className="post">
            <h1>{name}</h1>
            <p>
                {content}
            </p>
        </div>
    )
}

export default Post;