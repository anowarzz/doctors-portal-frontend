import { createBrowserRouter } from "react-router-dom";
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
            path: '/login',
            element: <Login />
        }
    ]
}
])

export default router