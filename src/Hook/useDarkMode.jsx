import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// Hinweis: src/lib/loadtheme.jsx setzt Storyblok-Farben als Inline-Style auf
// document.documentElement. Inline-Styles gewinnen gegen jede Stylesheet-Regel,
// deshalb muss der Darkmode-Override hier ebenfalls per Inline-Style passieren —
// im Light-Modus wird dafür der von Storyblok gesetzte Ursprungswert wiederhergestellt.
const DARK_VARIABLES = {
    "--color-Background-Primary": "#190601",
    "--color-About-Background": "#190601",
    "--color-Footer-Background": "#190601",
    "--color-text-primary": "#C8C8C8",
    "--color-text-secondary": "#C8C8C8",
    "--color-text-link": "#C8C8C8",
    "--color-text-footer": "#C8C8C8",
};

// Modul-Ebene statt useRef: document.documentElement überlebt Seitenwechsel
// innerhalb der SPA, einzelne Header-Instanzen (und ihre Refs) nicht. Der Cache
// darf deshalb nur einmal pro vollständigem Page-Load befüllt werden, nicht bei
// jedem Mount einer neuen Header-Instanz.
let cachedOriginalValues = null;

function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useDarkMode() {
    const [theme, setTheme] = useState(getInitialTheme);

    useEffect(() => {
        const root = document.documentElement;

        if (cachedOriginalValues === null) {
            cachedOriginalValues = Object.fromEntries(
                Object.keys(DARK_VARIABLES).map(property => [
                    property,
                    root.style.getPropertyValue(property),
                ])
            );
        }

        if (theme === "dark") {
            Object.entries(DARK_VARIABLES).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
        } else {
            Object.entries(cachedOriginalValues).forEach(([property, value]) => {
                if (value) {
                    root.style.setProperty(property, value);
                } else {
                    root.style.removeProperty(property);
                }
            });
        }

        root.setAttribute("data-theme", theme);
        localStorage.setItem(STORAGE_KEY, theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === "dark" ? "light" : "dark"));
    };

    return [theme, toggleTheme];
}

export default useDarkMode;