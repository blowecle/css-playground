import React from "react";
import './Gallery.css'
import Swan from './swan.jpg'
import Geese from './geese.jpg'
import KingFisher from './kingfisher.jpg'
import Owl from './owl.jpg'

const Gallery = () => {
    return (
        <section className='polaroid-gallery'>
            <h1 className='polaroid-gallery-title'>Polaroid Image Gallery</h1>
            <figure className='polaroid-card'>
                <img src={Swan} alt='swan' width={200} height={200}/>
                <figcaption className='polaroid-card-caption'>Swan</figcaption>
            </figure>
            <figure className='polaroid-card'>
                <img src={Geese} alt='geese' width={200} height={200}/>
                <figcaption className='polaroid-card-caption'>Geese</figcaption>
            </figure>
            <figure className='polaroid-card'>
                <img src={Owl} alt='owl' width={200} height={200}/>
                <figcaption className='polaroid-card-caption'>Owl</figcaption>
            </figure>
            <figure className='polaroid-card'>
                <img src={KingFisher} alt='KingFisher' width={200} height={200}/>
                <figcaption className='polaroid-card-caption'>KingFisher</figcaption>
            </figure>
        </section>
    )
}

export default Gallery;