import Aside from "./Aside";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ProductDetail(){


       useEffect(()=>{
        getDetailData();
       }, []);

        const { id } = useParams();
        const [ apiData, setDetailApiData ] = useState([]);

        const getDetailData = async ()=>{
            const data = await fetch(`https://student-api.softwareacademy.ng/menu/${id}/`);
            const convertData = await data.json();
            setDetailApiData(convertData);
            console.log(convertData);
        }

    return(
        <section>
            <div id="mainContent" className="home">
                    <div>
                        <h2>Data Here </h2>
                        <h2>{ apiData.menu_name }</h2>
                        <h2>{ apiData.prize }</h2>
                        <img src={ apiData.menu_img } alt={ apiData.menu_name } />
                        <div>
                            { apiData.description }
                        </div>
                     </div>
            
            </div>
            <Aside />
        </section>
    )
}

export default ProductDetail;