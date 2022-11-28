import React from 'react';
import Carousel from '../Carusel/Carousel';
import Hero from '../Hero/Hero';
import ProductsCat from '../ProductsCollection/ProductsCat';


const Home = () => {
    return (
        <div className=' mt-10'>
            <Carousel></Carousel>
            <Hero></Hero>
            <ProductsCat></ProductsCat>
        </div>
    );
};

export default Home;