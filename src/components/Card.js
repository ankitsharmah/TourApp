import { useState } from "react";

// import {  } from "";



function Card({ id, image, info, price, name, removeTour }){

        const [readmore,setReadmore]=useState(false);
        function readMoreHandler(){
            setReadmore(!readmore);
        }
        const descreption =readmore ? info: `${info.substring(0,200)}`;
   

            
        return (
            
            <div className="card">

                 
                    <img src={image} className="image">

                    </img>

                        <div className="tour-price">
                            <p>	&#8377; <span >{price}</span></p>
                        </div>
                        <h2 className="name">{name}</h2>

                        <p className="desc">
                           {descreption}
                           <span onClick={readMoreHandler} className="Read">
                             {readmore ? `...Show Less`:`...Read More`}
                           </span>
                        </p>

                        <button onClick={()=>{removeTour(id)}} className="not-intrester"> 
                            Not intrested
                        </button>



            </div>
            
        )
}

export default Card;