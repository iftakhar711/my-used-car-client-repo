import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';

const Dashboardlay = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content gap-2">

                        <li className=' bg-base-300'><Link to="/dashboard/allseller">All Seller</Link></li>
                        <li className=' bg-base-300'><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                        <li className=' bg-base-300'><Link to="/dashboard/addproduct">Add Product</Link></li>
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardlay;