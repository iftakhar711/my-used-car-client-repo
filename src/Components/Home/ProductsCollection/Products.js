import React from 'react';
import { Link } from 'react-router-dom';

const Products = ({ product }) => {
    const { category_name } = product
    return (
        <div className="card w-96  bg-amber-400 text-primary-content">
            <div className="card-body items-center">
                <h2 className="card-title font-bold ">{category_name}</h2>
                <p className=' font-semibold text-orange-500'>Choose Your Favourite Option to See.</p>
                <div className="card-actions justify-end">
                    <Link to={`products/${category_name}`}>
                        <button className="btn">See Now</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Products;