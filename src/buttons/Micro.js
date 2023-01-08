import React from "react";
import './micro.css';

const Micro = () => {
    return (
        <>
           <h1 className="page-title"> Micro Interactions - Button Icons Effects </h1>

            <div className="button-container">
            <button className="micro-button accept">
                <span className="action">Accept</span>
                <i className="fa fa-check"></i>
            </button>

            <button className="micro-button delete">
                <span className="action">Delete</span>
                <i className="fa fa-remove"></i>
            </button>
            </div>
        </>
    )
}

export default Micro;