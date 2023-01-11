import React from 'react';
import './loaders.css';

const Loaders = () => {
    return (
        <>
            <h1 className='page-title'> Classic Circular Border Spinner </h1>

            <div className='circular-spinner'></div>
            <div className='small-filler'/>
            
            <h1 className='page-title'> Growing Circle Spinner </h1>

            <div className='growing-circle-spinner'></div>
            <div className='small-filler'/>

            <h1 className='page-title'> Three Dots Pulse Spinner </h1>

            <div className='dot-container'>
                <div className='dot dot1'></div>
                <div className='dot dot2'></div>
                <div className='dot dot3'></div>
            </div>

            <div className='small-filler'/>

            <h1 className='page-title'> Heartbeat Preloader </h1>

            <div className='heartbeat-loader'></div>

            <div className='small-filler'/>

            <h1 className='page-title'> Rotating Squares Preloader </h1>

            <div className='rotating-squares'></div>
        
            <div className='small-filler'/>

            <h1 className='page-title'> Wave Preloader </h1>

            <div className='wave'>
                <div className='step step1'></div>
                <div className='step step2'></div>
                <div className='step step3'></div>
                <div className='step step4'></div>
                <div className='step step5'></div>
            </div>

            <div className='small-filler'/>

            <h1 className='page-title'> Colorful Center Squares Preloader </h1>

            <div className='colorful'>
                <div className='square square1'></div>
                <div className='square square2'></div>
                <div className='square square3'></div>
                <div className='square square4'></div>
            </div>

            <div className='small-filler'/>

            <h1 className='page-title'> Square to Circle Rotating Spinner </h1>

            <div className='rotating-square'></div>

            <div className='small-filler'/>
            
            <h1 className='page-title'> Clock Arrow Spinner </h1>

            <div className='clock'></div>
            
            <div className='small-filler'/>

        </>
    )
}

export default Loaders;