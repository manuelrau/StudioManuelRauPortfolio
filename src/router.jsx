import { createBrowserRouter } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Home from "./Pages/Home/Home.jsx"
import App from "./App.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import ArticlePage from "./Pages/ArticlePage/ArticlePage.jsx";
import Index from "./Pages/Index/index.jsx";

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
              path: "artikel/:slug",
              element: <ArticlePage />
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