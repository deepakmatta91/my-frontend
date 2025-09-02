import { useState } from "react";
import img_1 from "./img_1.jpg"
import img_2 from "./img_2.jpg"
import img_3 from "./img_3.jpg"

const Cards=() =>{
    const[test,setTest] =useState(img_1);
    const Image=() =>{
        const images=[img_1,img_2,img_3]
        const randomIndex = Math.floor(Math.random()*images.length);
        setTest(images[randomIndex]);

    };

    return(
        <>
        <div><img src={test} alt="" style={{height:"1000px", width:"800px"}} /></div>
        <button  style={{height:"100px", width:"100px"}} onClick={Image}>click</button>
        </>
    )

}
export default Cards;


