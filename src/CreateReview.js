import Aside from "./Aside";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function CreateReview(){


     
    return(
        <section>
            <div id="mainContent" className="home">
                    <h2>Add Review</h2>
                   <form>
                        <div>
                            <label>Name</label>
                            <input type="text" />
                        </div>
                        <div>
                            <label>Message</label>
                            <textarea></textarea>
                        </div>
                        <button>Create Review</button>
                   </form>
            </div>
            <Aside />
        </section>
    )
}

export default CreateReview;