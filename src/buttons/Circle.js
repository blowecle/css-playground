import React from "react";
import './circle.css';

const Circle = () => {
    return (
        <>
            <h1 className="page-title"> Circle Fill Hover Effect </h1>

            <div className="circle-button-container">
            <button className="circle-button circle-first">
                <span className="btn-txt">Circle Fill Button 1</span>
            </button>

            <button className="circle-button circle-second">
                <span className="btn-txt">Circle Fill Button 2</span>
            </button>
            </div>
        </>
    )
}

export default Circle;