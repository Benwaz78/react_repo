import athena from "./images/athena.png";
import Aside from "./Aside";
import { useState, useEffect } from "react";

function Product(){

    const [apiData, setApiData] = useState([]);

    useEffect(()=>{
        getApiData();
    }, []);

    const getApiData = async ()=>{
        const data = await fetch('https://jsonplaceholder.typicode.com/posts');
        const convertData = await data.json();
        setApiData(convertData);
        console.log("TITLE", convertData[0].title);
        console.log("BODY", convertData[0].body);
    }


    return(
        <section>
            <div id="mainContent" className="home">
                <div className="product">
                    <div className="img-div">
                        <img src={ athena } alt="Athena" />
                    </div>
                    <div className="content-div">
                        <h2> { apiData[0].title } </h2>
                        { apiData[0].body }
                        
                        <a href="detail.html">Readmore >></a>
                    </div>
                </div>
               
            </div>
            <Aside />
        </section>
       
    )
}

export default Product;