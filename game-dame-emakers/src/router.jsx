import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Recovery from "./pages/Recovery.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Register />
    },
    {
        path: "/login",
        element: <Login />
    },
    {
        path: "/recovery",
        element: <Recovery />
    }
])

export default router