import React from 'react';
import img1 from '../../../images/1590.jpg'
import img2 from '../../../images/blue-car-speed-motion-stretch-style.jpg'
import img3 from '../../../images/luxury-sports-car-back-half-side-view.jpg'
import img4 from '../../../images/white-offroader-jeep-parking.jpg'

const Carousel = () => {
    return (
    <div>
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <img alt='/' src={img1} className=" h-[650px] w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <img alt='/' src={img2} className="h-[650px] w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <img alt='/' src={img3} className="h-[650px] w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <img alt='/' src={img4} className="h-[650px] w-full" />
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    </div>
   
    ) 

};

export default Carousel; 