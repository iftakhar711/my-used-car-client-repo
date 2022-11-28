import React, { useEffect, useState } from 'react';
import Products from './Products';


const ProductsCat = () => {
    const [productcat, setproductcat] = useState()
    useEffect(() => {
        fetch('https://used-products-server-iftakhar711.vercel.app/products')
            .then(res => res.json())
            .then(data => setproductcat(data));
    }, [])

    return (
        <div className=' grid sm:grid-cols-1 sm:gap-3 md:grid-cols-2 md:gap-2  lg:grid-cols-3 mt-10 lg:items-center'>
            {
                productcat?.map(product => <Products product={product} key={product.category_id}></Products>)
            }
        </div>
    );
};

export default ProductsCat;