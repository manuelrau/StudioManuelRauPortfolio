import { StrictMode } from 'react'
import "./lib/storyblokinit.jsx";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { loadTheme } from "./lib/loadtheme";
import './index.css'
import router from './router'

loadTheme().finally(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <HelmetProvider>
                <RouterProvider router={router} />
            </HelmetProvider>

        </StrictMode>,
    )
})