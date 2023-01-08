import React from "react";
import './swipe.css';

const Swipe = () => {
    return (
        <>
            <h1 className="page-title"> Swipe Fill Left and Right Effects </h1>

            <div className="button-container">
            <button className="swipe-button swipe-left">
                <span>Left Fill Effect</span>
            </button>

            <button className="swipe-button swipe-right">
                <span>Right Fill Effect</span>
            </button>
            </div>
        </>
    )
}

export default Swipe;