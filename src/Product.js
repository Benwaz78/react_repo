import Aside from "./Aside";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Product(){

       useEffect(()=>{
        getApiData();
       }, []);


        const [ apiData, setApiData ] = useState([]);

        const getApiData = async ()=>{
            const data = await fetch("https://student-api.softwareacademy.ng/api/");
            const convertData = await data.json();
            setApiData(convertData);
            console.log(convertData);
            // console.log(convertData.results[0].name.title, convertData.results[0].name.first);
        }



    return(
        <section>
            <div id="mainContent" className="home">
                {
                    apiData.map(
                        item=>(
                            <div className="product" key={item.id}>
                            <div className="img-div">
                                <img src={ item.menu_img } alt={ item.menu_name } />
                            </div>
                            <div className="content-div">
                                <h2> { item.menu_name } </h2>
        
                               <Link to={`/product/${item.id}`}>
                                    <button>Readmore </button>
                               </Link>
                                
                            </div>
                        </div>
                        )
                    )
                }
               
              
            </div>
            <Aside />
        </section>
    )
}

export default Product;