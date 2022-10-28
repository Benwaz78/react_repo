import Aside from "./Aside";
import { useState } from "react";

function CreateReview(){

    const [name, setName] = useState('');
    const [review, setReview] = useState('');
    const [isPending, setPending] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const handleSubmit = (evt)=>{
        evt.preventDefault();

        const body = {name, review};
        console.log(body);
        setPending(true);

        const header = {
            method: "POST",
            headers: {"Content-Type":"application/json"},
            body: JSON.stringify(body),
        }

        fetch('https://student-api.softwareacademy.ng/create-api-review/', header).then(
            ()=>{
                console.log("Data added");
                setSuccess(true);
                setPending(false);
            }
        )
    }

    return(
        <section>
            <div id="mainContent" className="home">
                    <h2>Add Review</h2>
                   <form onSubmit={ handleSubmit }>
                        <div className="form-group">
                            <label>Name</label>
                            <input 
                            type="text" 
                            value={name}
                            onChange={(e)=>{ setName(e.target.value) }}
                            required
                            />
                        </div>
                        <div className="form-group">
                            <label>Review</label>
                            <textarea
                            required
                             value={review}
                             onChange={ (e)=>{ setReview(e.target.value) }}
                            ></textarea>
                        </div>
                        {!isPending &&  <button className="btn-state">Create Review</button> }
                        {isPending  &&  <button className="loading-btn-state">Create Review.......</button>}
                        {isSuccess && <div className="alert-success">Review Added</div>}
                       
                       
                        
                   </form>
            </div>
            <Aside />
        </section>
    )
}

export default CreateReview;