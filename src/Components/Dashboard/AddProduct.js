import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import toast from 'react-hot-toast';
import { AuthContext } from '../../Contexts/AuthProvider'


const AddProduct = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    const { user } = useContext(AuthContext)
    const date = format(selectedDate, 'PP');


    const handelAdd = event => {
        event.preventDefault()
        const productInfo = {
            sellername: event.target.sellername.value,
            productname: event.target.Product.value,
            location: event.target.location.value,
            category: event.target.category.value,
            resaleprice: event.target.resaleprice.value,
            originalprice: event.target.originalprice.value,
            used: event.target.used.value,
            image: event.target.image.value,
            publishDate: date
        }

        //post product data
        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    toast.success('Add Succesfully.');
                }
                else {
                    toast.error(data.message);
                }
            })
        fetch(`http://localhost:5000/products/${productInfo?.category}`)
            .then(res => res.json())
            .then(data => console.log(data))
    }

    return (
        <>
            <DayPicker
                className=' hidden'
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
            />


            <div className='flex justify-center items-center pt-8'>
                <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-800'>
                    <form
                        onSubmit={handelAdd}
                        noValidate=''
                        action=''
                        className='space-y-12 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>
                            <div>
                                <label htmlFor='name' className='block mb-2 text-sm'>
                                    Seller Name
                                </label>
                                <input
                                    type='text'
                                    name='sellername'
                                    id='name'
                                    defaultValue={user?.displayName}
                                    disabled
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <input type="text"
                                    defaultValue={date}
                                    disabled
                                    className="input w-full border rounded-md border-gray-300" />
                            </div>

                            <div>
                                <label htmlFor='name' className='block mb-2 text-sm'>
                                    Product Name
                                </label>
                                <input
                                    type='text'
                                    name='Product'
                                    id='name'
                                    placeholder='Enter Product name'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='location' className='block mb-2 text-sm'>
                                    Location
                                </label>
                                <input
                                    type='text'
                                    name='location'
                                    id='location'
                                    placeholder='Enter location'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>

                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Set Img Url
                                </label>
                                <input
                                    required
                                    type="url"
                                    id='image'
                                    name='image'
                                    placeholder='url'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                />
                            </div>

                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Category :
                                </label>
                                <select name="category" id="cars" required>
                                    <option value="luxurycar">luxurycar</option>
                                    <option value="normalcar">normalcar</option>
                                    <option value="van">van</option>
                                </select>

                            </div>

                            <div className=' grid grid-cols-3'>
                                <div>
                                    <label htmlFor='resale price' className='block mb-2 text-sm'>
                                        Resale Price
                                    </label>
                                    <input
                                        type='text'
                                        name='resaleprice'
                                        id='name'
                                        placeholder='resaleprice'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='original price' className='block mb-2 text-sm'>
                                        Original Price
                                    </label>
                                    <input
                                        type='text'
                                        name='originalprice'
                                        id='name'
                                        placeholder='originalprice'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>
                                <div>
                                    <label htmlFor='years of use' className='block mb-2 text-sm'>
                                        Years of Use
                                    </label>
                                    <input
                                        type='text'
                                        name='used'
                                        id='name'
                                        placeholder='years of use'
                                        className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-green-500 bg-gray-200 text-gray-900'
                                        data-temp-mail-org='0'
                                    />
                                </div>

                            </div>

                        </div>
                        <div className='space-y-2'>
                            <div>
                                <button
                                    type='submit'
                                    className='w-full px-8 py-3 font-semibold rounded-md bg-gray-900 hover:bg-gray-700 hover:text-white text-gray-100'
                                >
                                    Add Product
                                </button>
                            </div>
                        </div>
                    </form>


                </div>
            </div>
        </>
    );
};

export default AddProduct;