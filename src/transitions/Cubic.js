import React from "react";
import './cubic.css';

const Cubic = () => {
    return (
        <div className='container'>
            <div className='transition cubic'>cubic</div>
            <div className='transition delay'>delay</div>
        </div>
    )
}

export default Cubic;