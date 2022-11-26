import { createBrowserRouter } from "react-router-dom";
import About from "../../components/Pages/About/About";
import Appointment from "../../components/Pages/Appointment/Appointment/Appointment";
import AddDoctor from "../../components/Pages/DashBoard/AddDoctor/AddDoctor";
import AllUsers from "../../components/Pages/DashBoard/AllUsers/AllUsers";
import DashBoard from "../../components/Pages/DashBoard/DashBoard/DashBoard";
import MyAppointment from "../../components/Pages/DashBoard/MyAppointment/MyAppointment";
import ErrorPage from "../../components/Pages/ErrorPage/ErrorPage";
import Home from "../../components/Pages/Home/Home/Home";
import Login from "../../components/Pages/Login/Login";
import Reviews from "../../components/Pages/Reviews/Reviews";
import SignUp from "../../components/Pages/SignUp/SignUp";
import DashboardLayout from "../../layout/DashboardLayout";
import Main from "../../layout/Main";
import AdminRoute from "../AdminRoute/AdminRoute";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/appointment",
        element: <Appointment />,
      },
      {
        path: "/about",
        element: <About />,
      },

      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element:<MyAppointment />,
      },
      {
        path: "/dashboard/allUsers",
        element: <AdminRoute> <AllUsers></AllUsers> </AdminRoute>
      },
      {
        path: "/dashboard/addDoctor",
        element: <AdminRoute> <AddDoctor></AddDoctor>  </AdminRoute>
      },
    ],
  },
]);

export default router;
