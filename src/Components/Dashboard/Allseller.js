import React from 'react';
import toast from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';


const Allseller = () => {
    const { data: allseller = [], refetch } = useQuery({
        queryKey: ['allseller'],
        queryFn: async () => {
            const res = await fetch('https://products-server-eta.vercel.app/seller');
            const data = await res.json();
            return data;
        }
    });

    const handleMakeAdmin = id => {
        fetch(`https://products-server-eta.vercel.app/users/admin/${id}`, {
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

    const handleDeleteSeller = id => {
        fetch(`https://products-server-eta.vercel.app/users/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                toast.success('Delete succesfully...')
                refetch()
            })
    }
    return (
        <div>
            <h1 className=' font-extrabold text-lg text-center p-6'>ALL SELLER</h1>
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
            {allseller &&
                allseller?.map(seller =>
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Make Admin</button>}</td>
                                <td>{seller?.role === 'seller' && <button onClick={() => handleDeleteSeller(seller._id)} className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Delete</button>}</td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </div>
    );
};

export default Allseller;