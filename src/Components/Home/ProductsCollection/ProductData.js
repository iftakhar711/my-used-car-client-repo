import React from 'react';

const ProductData = ({ product, setProinfo }) => {
    const { sellername, productname, location, resaleprice, originalprice, used, image, publishDate } = product;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title  text-yellow-600">{productname}</h2>
                <div className=' flex  gap-3'>
                    <p className=' font-bold text-orange-400'>Location:{location}</p>
                    <p className=' font-bold'>Published:{publishDate}</p>
                </div>
                <div className=' flex  gap-3 '>
                    <p className=' font-bold '>ResalePrice:{resaleprice}$</p>
                    <p className=' font-bold'>OriginalPrice:{originalprice}$</p>
                </div>
                <div className=' flex  gap-3 '>
                    <p className=' font-bold '>Year of Used:{used} Year</p>
                </div>
                <div className=' flex  gap-3 '>
                    <p className=' font-bold '>Seller name: {sellername}</p>
                </div>

                <div className="card-actions">
                    <label htmlFor="my-modal-3" className="btn" onClick={() => setProinfo(product)}>open modal</label>
                </div>
            </div>
        </div>
    );
};

export default ProductData;