import { StrictMode } from 'react'
import { loadTheme } from "./lib/loadtheme";
import { createRoot } from 'react-dom/client'
import { RouterProvider } from "react-router-dom";
import './index.css'
import router from './router'

loadTheme().finally(() => {
    createRoot(document.getElementById('root')).render(
        <StrictMode>
            <RouterProvider router={router} />
        </StrictMode>,
    )
})