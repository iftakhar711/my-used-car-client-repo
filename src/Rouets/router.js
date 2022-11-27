import { createBrowserRouter } from "react-router-dom";
import Blogs from "../Components/Blogs/Blogs";
import AddProduct from "../Components/Dashboard/AddProduct";
import Errorpage from "../Components/Errorpage/Errorpage";
import Home from "../Components/Home/Home/Home";
import Signin from "../Components/Signup/Signin";
import Signup from "../Components/Signup/Signup";
import Dashboardlay from "../Layout/Dashboardlay";
import Main from "../Layout/Main";

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
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboardlay></Dashboardlay>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/dashboard',
                element: <AddProduct></AddProduct>
            },

        ]
    }
])

export default router