import { createBrowserRouter } from "react-router-dom";
import Register from "./pages/Register.jsx";
import Login from "./pages/Login.jsx";
import Recovery from "./pages/Recovery.jsx";
import Home from "./pages/Home.jsx";
import Game from "./pages/Game.jsx";

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
    },
    {
        path: "/home",
        element: <Home />
    },
    {
        path: "/game",
        element: <Game />
    }
])

export default router