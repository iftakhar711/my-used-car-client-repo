import React from 'react';
import { useQuery } from '@tanstack/react-query';

const Myproduct = () => {
    const { data: myproduct = [] } = useQuery({
        queryKey: ['myproduct'],
        queryFn: async () => {
            const res = await fetch('https://used-products-server-iftakhar711.vercel.app/bookings');
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                myproduct?.map(product =>
                    <div className="card w-96 bg-base-100 shadow-xl image-full">
                        <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{product?.productname}</h2>
                            <p>{product?.name}</p>
                            <p>{product?.email}</p>
                            <p>Price: {product?.resaleprice}</p>
                            <p>location:{product?.location}</p>
                            <p>Contact:{product?.phone}</p>

                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Myproduct;