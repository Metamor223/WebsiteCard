import React from "react";
import "./Head.css";

const Head = () => {
    return(
    <div className="Header">
        <h1>Визитная карточка</h1>
        <p>Дмитрий Панов</p>
        <div className="arrow">
           <a href="#mainpage">
            <span></span>
            <span></span>
            <span></span>   
           </a>
        </div>
    </div>
)}

export default Head;