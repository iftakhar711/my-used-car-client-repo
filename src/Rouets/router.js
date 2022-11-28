import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import AddProduct from "../Components/Dashboard/AddProduct";
import Allbuyer from "../Components/Dashboard/Allbuyer";
import Allseller from "../Components/Dashboard/Allseller";
import Errorpage from "../Components/Errorpage/Errorpage";
import Home from "../Components/Home/Home/Home";
import Product from "../Components/Home/ProductsCollection/Product";
import Signin from "../Components/Signup/Signin";
import Signup from "../Components/Signup/Signup";
import Dashboardlay from "../Layout/Dashboardlay";
import Main from "../Layout/Main";
import Privaterouet from "./Privaterouets/Privaterouet"

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
                loader: ({ params }) => fetch(`http://localhost:5000/products/${params?.category}`)
            },

        ]
    },
    {
        path: '/dashboard',

        element: <Privaterouet><Dashboardlay></Dashboardlay></Privaterouet>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/dashboard/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashboard/allbuyer',
                element: <Allbuyer></Allbuyer>
            },
            {
                path: '/dashboard/allseller',
                element: <Allseller></Allseller>
            },



        ]
    }
])

export default router