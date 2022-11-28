import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';

const Allbuyer = () => {
    const { data: allbuyer = [], refetch } = useQuery({
        queryKey: ['allbuyer'],
        queryFn: async () => {
            const res = await fetch('https://used-products-server-iftakhar711.vercel.app/buyer');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://used-products-server-iftakhar711.vercel.app/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')
                    refetch()
                }
            })
    }

    return (
        <div>
            <h1 className=' font-extrabold text-lg text-center p-6'>ALL BUYER</h1>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email Address</th>
                        <th>Make admin</th>
                        <th>Delete</th>
                    </tr>
                </thead>
            </table>
            {
                allbuyer?.map(buyer =>
                    <table className="table w-full">

                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>{buyer.name}</td>
                                <td>{buyer.email}</td>
                                <td>{buyer?.admin !== 'admin' && <button onClick={() => handleMakeAdmin(buyer._id)} className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Make Admin</button>}</td>
                                <td><button className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </div>
    );
};

export default Allbuyer;