import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About";
import Appointment from "../../components/Pages/Appointment/Appointment";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Main from "../../layout/Main";

const router = createBrowserRouter([
{
    path: '/',
    element: <Main />,
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
            path: '/reviews',
            element: <Login />
        },
        {
            path: '/about',
            element: <About />
        },
        {
            path: '/login',
            element: <Login />
        },
    ]
}
])

export default router