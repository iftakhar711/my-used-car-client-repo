import React, { useContext } from 'react';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../Contexts/AuthProvider';

const Myproduct = () => {
    const { user } = useContext(AuthContext)
    const url = `https://products-server-eta.vercel.app/bookings/${user?.email}`
    const { data: myproduct = [] } = useQuery({
        queryKey: ['myproduct', user?.email],
        queryFn: async () => {
            const res = await fetch(url);
            const data = await res.json();
            return data;
        }
    });
    return (
        <div className=' grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16' >
            {myproduct &&
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