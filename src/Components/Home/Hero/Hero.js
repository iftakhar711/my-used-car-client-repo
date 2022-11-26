import React from 'react';
import image from '../../../images/3339154.jpg'

const Hero = () => {
    return (
        <div className="hero h-[500px] bg-base-100 mb-8">
            <div className="hero-content flex-col lg:flex-row">
                <img alt='' src={image} className="max-w-lg  rounded-lg shadow-2xl " />
                <div>
                    <h1 className="text-5xl font-bold">Want a Car in Best Price!</h1>
                    <p className="py-6">Money may not buy happiness, but I'd rather cry in a Jaguar than on a bus.”
                        ― Françoise Sagan</p>
                    <button className="btn btn-primary">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default Hero;