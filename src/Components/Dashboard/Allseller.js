import React from 'react';
import toast from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';

const Allseller = () => {
    const allseller = useLoaderData()
    console.log(allseller);

    const handleMakeAdmin = id => {
        fetch(`http://localhost:5000/users/admin/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Make admin successful.')

                }
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
            {
                allseller?.map(seller =>
                    <table className="table w-full">
                        <tbody>
                            <tr>
                                <th>1</th>
                                <td>{seller.name}</td>
                                <td>{seller.email}</td>
                                <td>{seller?.role !== 'admin' && <button onClick={() => handleMakeAdmin(seller._id)} className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Make Admin</button>}</td>
                                <td><button className='px-4 py-2 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'>Delete</button></td>
                            </tr>
                        </tbody>
                    </table>
                )
            }
        </div>
    );
};

export default Allseller;