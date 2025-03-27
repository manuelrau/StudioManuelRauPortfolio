import { createBrowserRouter } from "react-router-dom";
import Page from "./Pages/About.jsx";

const router = createBrowserRouter ([
    {
        path: "/",
        element: <Page slug="home" />,
    },
    {
        path: "/about",
        element: <Page />
    },
])

export default router;