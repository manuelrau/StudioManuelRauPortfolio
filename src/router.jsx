import { createBrowserRouter, Navigate } from "react-router-dom";
import About from "./Pages/About/About.jsx";
import Home from "./Pages/Home/Home.jsx"
import App from "./App.jsx";
import NotFound from "./Pages/NotFound/NotFound.jsx";
import ArticlePage from "./Pages/ArticlePage/ArticlePage.jsx";
import Index from "./Pages/Index/index.jsx";
import Imprint from "./Pages/Imprint/index.jsx";
// Funktion zum Erkennen der Sprache
function getUserLanguage() {
    const language = navigator.language || navigator.userLanguage;
    // Beispiel: Wenn die Sprache "de" enthält, leite auf /de-de, sonst auf /en
    if (language.startsWith('de')) {
        return 'de-de';
    }
    return 'en';
}

// Beim Router-Setup eine initiale Weiterleitung basierend auf der Sprache
const userLang = getUserLanguage();



const router = createBrowserRouter ([

    {
        path: "/",  // root path
        element: <Navigate to={`/${userLang}`} replace />
    },

    {

        path: "/:lang", // Sprache als Teil der URL
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
              path: "articles/:slug",
              element: <ArticlePage />
            },
            {
                path: "index",
                element: <Index slug="index" />,
            },
            {
                path: "imprint",
                element: <Imprint slug="imprint" />,
            },
            {
                path: "*",
                element: <NotFound slug="not-found" />,
            }
        ]
    }

])

export default router;