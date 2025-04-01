import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About.jsx";
import Home from "./Pages/Home.jsx"
import App from "./App.jsx";
import NotFound from "./Pages/NotFound.jsx";
import Index from "./Pages/index.jsx";

const router = createBrowserRouter ([
    {
        path: '/',
        element: <App />,
        errorElement: <NotFound />,
        children: [
           {
                index: true,
                element: <Home slug="home" />,
            },
            {
                path: "about",
                element: <About slug="about" />
            },
            {
                path: "index",
                element: <Index slug="index" />,
            },
            {
                path: "*",
                element: <NotFound slug="not-found" />,
            }
        ]
    }

])

export default router;