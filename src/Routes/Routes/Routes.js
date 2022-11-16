import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About";
import Appointment from "../../components/Pages/Appointment/Appointment/Appointment";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Register from "../../components/Pages/Register/Register";
import Reviews from "../../components/Pages/Reviews/Reviews";
import Main from "../../layout/Main";

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
    
    ],
},
{
    path: '/login',
    element: <Login />
},
{
    path: '/register',
    element: <Register />
},
])

export default router