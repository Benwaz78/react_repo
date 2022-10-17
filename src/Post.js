import React from "react";
import "./App.css";


function Post(props){
    return(
        <div className="post">
            <h1>{props.name}</h1>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Post;