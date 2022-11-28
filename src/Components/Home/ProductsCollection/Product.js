import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from './BookingModal';
import ProductData from './ProductData';

const Product = () => {
    const productdata = useLoaderData()
    const [proinfo, setProinfo] = useState()
    return (
        <div>
            <div className=' grid mt-10 sm:grid-cols-1 sm:mx-auto sm:gap-3 md:grid-cols-2 md:mx-auto md:gap-3 lg:grid-cols-3 lg:mx-auto lg:gap-3'>
                {
                    productdata?.map(product => <ProductData product={product} key={productdata?.productname} setProinfo={setProinfo}></ProductData>)
                }
            </div>
            {productdata &&
                <BookingModal proinfo={proinfo}></BookingModal>
            }

        </div>
    );
};

export default Product;