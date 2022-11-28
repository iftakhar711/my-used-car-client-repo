import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import AddProduct from "../Components/Dashboard/AddProduct";
import Allbuyer from "../Components/Dashboard/Allbuyer";
import Allseller from "../Components/Dashboard/Allseller";
import Myproduct from "../Components/Dashboard/Myproduct";
import Errorpage from "../Components/Errorpage/Errorpage";
import Home from "../Components/Home/Home/Home";
import Product from "../Components/Home/ProductsCollection/Product";
import Signin from "../Components/Signup/Signin";
import Signup from "../Components/Signup/Signup";
import Dashboardlay from "../Layout/Dashboardlay";
import Main from "../Layout/Main";
import AdminRoute from "./AdminRoute";
import Privaterouet from "./Privaterouets/Privaterouet"
import SellerRoute from "./SellerRoute";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/signin',
                element: <Signin></Signin>
            },
            {
                path: '/signup',
                element: <Signup></Signup>
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/products/:category',
                element: <Privaterouet><Product></Product></Privaterouet>,
                loader: ({ params }) => fetch(` https://used-products-server-iftakhar711.vercel.app/${params?.category}`)
            },

        ]
    },
    {
        path: '/dashboard',
        element: <Dashboardlay></Dashboardlay>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/dashboard',
                element: <Myproduct></Myproduct>,
            },
            {
                path: '/dashboard/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashboard/allbuyer',
                element: <AdminRoute><Allbuyer></Allbuyer></AdminRoute>
            },
            {
                path: '/dashboard/allseller',
                element: <AdminRoute><Allseller></Allseller></AdminRoute>
            },




        ]
    }
])

export default router