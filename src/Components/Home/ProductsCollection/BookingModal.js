import React, { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const BookingModal = ({ proinfo }) => {
    const { user } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const productname = form.productname.value;
        const name = form.name.value;
        const email = form.email.value;
        const resaleprice = form.resaleprice.value;
        const location = form.location.value;
        const phone = form.phone.value;

        const booking = {
            productname,
            name,
            email,
            resaleprice,
            location,
            phone
        }

        fetch('https://products-server-eta.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Booking confirmed');
                    navigate('/')
                }
                else {
                    toast.error(data.message);
                }
            })


    }

    return (
        <>
            <input type="checkbox" id="my-modal-3" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="my-modal-3" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{proinfo?.productname}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name="productname" type="text" defaultValue={proinfo?.productname} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="name" type="text" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input w-full input-bordered" />
                        <input name="email" type="email" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input name="resaleprice" type="text" defaultValue={proinfo?.resaleprice} disabled className="input w-full input-bordered" />
                        <input type='text' name='location' id='location' placeholder='Enter location' className="input w-full input-bordered" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    );
};

export default BookingModal;