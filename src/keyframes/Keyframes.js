import React from "react";
import './keyframes.css';

const Keyframes = () => {
    return (
        <>
            <h1 className="page-title"> Keyframe Animations </h1>
            <div className='keyframes-container'>
                <div className="keyframes-box"></div>
            </div>
            <div className='keyframes-container'>
                <div className='filler'/>
            </div>
            <div className='keyframes-container'>
                <div className='keyframes-box2'/>
            </div>
            <div className='filler'/>
            <div className='keyframes-container'>
                <div className='keyframes-box3'/>
                <div className='keyframes-box4'/>
                <div className='keyframes-box5'>WELCOME</div>
            </div>
            <div className='filler'/>
            <div className='filler'/>
        </>
    )
}

export default Keyframes;