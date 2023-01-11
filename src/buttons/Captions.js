import React from "react";
import './captions.css';

const Captions = () => {
    return (
        <>
            <h1 className="image-page-title"> Caption Hover Effect </h1>

            <div className="image-container">
                <figure className="fig1">
                    <img src="https://picsum.photos/300/200?image=144" />
                    <figcaption>Overlay text...</figcaption>
                </figure>
                <figure className="fig2">
                    <img src="https://picsum.photos/300/200?image=444" />
                    <figcaption>Overlay text...</figcaption>
                </figure>
                <figure className="fig3">
                    <img src="https://picsum.photos/300/200?image=344" />
                    <figcaption>Overlay text...</figcaption>
                </figure>
            </div>

            <div className='small-filler'/>

            <h1 className="page-title"> Zoom In Effect </h1>

            <div className="image-container">
                <figure className="fig1">
                    <img src="https://picsum.photos/300/200?image=144" />
                </figure>
                <figure className="fig2">
                    <img src="https://picsum.photos/300/200?image=344" />
                </figure>
                <figure className="fig3">
                    <img src="https://picsum.photos/300/200?image=444" />
                </figure>
            </div>
        </>
    )
}

export default Captions;