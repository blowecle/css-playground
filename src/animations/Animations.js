import React from 'react';
import './animations.css';
import Paris from './img/paris.jpg'
import Istanbul from './img/istanbul.jpg'
import Amsterdam from './img/amsterdam.jpg'
import Berlin from './img/berlin.jpg'
import { useState } from 'react';
import Mac from './macbook.jpeg'

const Animations = () => {

    const [toggle, setToggle] = useState(false);

    const showOverlay = () => {
        setToggle(!toggle);
        setTimeout(() => {
            setToggle(false)
        }, 2000)
      }

    return (<>
                <h1 className='page-title'> Pure CSS Typing Effect </h1>

                <div className='writer'>
                    <div className='typing-text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</div>
                </div>

                <div className='small-filler'/>

                <h1 className='page-title'> Simple Image Slideshow </h1>


                <div className='slider'>
                    <div className='slides'>
                        <div className='slide'>
                            <img src={Istanbul} alt='istanbul'/>
                        </div>
                        <div className='slide'>
                            <img src={Amsterdam} alt='amsterdam'/>
                        </div>
                        <div className='slide'>
                            <img src={Berlin} alt='berlin'/>
                        </div>
                        <div className='slide'>
                            <img src={Paris} alt='paris'/>
                        </div>
                    </div>
                </div>
            <div className='filler'/>

            <h1 className='page-title'> Overlay with Spinner </h1>

            <div className='page-body'>
                <button onClick={showOverlay}>Click Me</button>
            </div>
            {toggle ? (
            <div className='overlay'>
                <div className='spinner'></div>
            </div>
            ) : (
                <></>
            )}
            <div className='filler'/>

            <h1 className='page-title'> Animated progress bar - Loading Page </h1>

            <div className='progress-bar-wrapper'>
                <div className='progress-bar'>
                    <div className='progress-bar-fill'></div>
                </div>
            </div>

            <div className='filler'/>

            <h1 class="page-title"> Flipping cards, Click and Hold </h1>


            <div class="card-wrapper-1">


                <div class="card-wrapper-2 first">

                <div class="front-card">
                    <img src={Mac} />
                    <h2> New Macbook Pro 16 </h2>
                    <p>Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook we have ever made. </p>
                </div>

                <div class="back-card">
                    <h2> $2,399.00 </h2>
                    <a href="#">Buy </a>
                </div>

                </div>

                <div class="card-wrapper-2 second">

                <div class="front-card">
                    <img src={Mac} />
                    <h2> New Macbook Pro 16 </h2>
                    <p>Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook we have ever made. </p>
                </div>

                <div class="back-card">
                    <h2> $2,399.00 </h2>
                    <a href="#">Buy </a>
                </div>

                </div>

                <div class="card-wrapper-2 third">

                <div class="front-card">
                    <img src={Mac} />
                    <h2> New Macbook Pro 16 </h2>
                    <p>Designed for those who defy limits and change the world, the 16-inch MacBook Pro is by far the most powerful notebook we have ever made. </p>
                </div>

                <div class="back-card">
                    <h2> $2,399.00 </h2>
                    <a href="#">Buy </a>
                </div>

                </div>

            </div>
            <div className='filler'/>
        </>
    )
}

export default Animations;