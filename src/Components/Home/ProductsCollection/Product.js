import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ProductData from './ProductData';

const Product = () => {
    const productdata = useLoaderData()
    console.log(productdata);
    return (
        <div className=' grid mt-10 sm:grid-cols-1 sm:mx-auto sm:gap-3 md:grid-cols-2 md:mx-auto md:gap-3 lg:grid-cols-3 lg:mx-auto lg:gap-3'>
            {
                productdata?.map(product => <ProductData product={product}></ProductData>)
            }
        </div>
    );
};

export default Product;