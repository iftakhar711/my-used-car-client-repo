import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar/Navbar';
import { AuthContext } from '../Contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const Dashboardlay = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email)
    const [isSeller] = useSeller(user?.email)
    const [isBuyer] = useBuyer(user?.email)

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
                        {isBuyer && <><li className=' bg-base-300'><Link to="/dashboard">My Cart</Link></li></>}
                        {isAdmin &&
                            <>
                                <li className=' bg-base-300'><Link to="/dashboard/allseller">All Seller</Link></li>
                                <li className=' bg-base-300'><Link to="/dashboard/allbuyer">All Buyer</Link></li>
                            </>
                        }
                        {isSeller && <>
                            <li className=' bg-base-300'><a href="/dashboard/addproduct">Add Product</a></li>
                        </>
                        }


                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboardlay;