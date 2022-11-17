import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About";
import Appointment from "../../components/Pages/Appointment/Appointment/Appointment";
import DashBoard from "../../components/Pages/DashBoard/DashBoard/DashBoard";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Reviews from "../../components/Pages/Reviews/Reviews";
import SignUp from "../../components/Pages/SignUp/SignUp";
import Main from "../../layout/Main";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/', 
            element: <Home />
        },
        {
            path: '/appointment',
            element: <Appointment />
        },
        {
            path: '/about',
            element: <About />
        },
    
        {
            path: '/reviews',
            element: <Reviews />
        },
        {
            path: '/login',
            element: <Login />
        },
        {
            path: '/signup',
            element: <SignUp />
        },
    
    ],
},
{
    path: '/dashboard',
    element: <PrivateRoute>
        <DashBoard />
    </PrivateRoute>
}

])

export default router