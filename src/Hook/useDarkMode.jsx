import { useEffect, useRef, useState } from "react";

const STORAGE_KEY = "theme";

// Hinweis: src/lib/loadtheme.jsx setzt Storyblok-Farben als Inline-Style auf
// document.documentElement. Inline-Styles gewinnen gegen jede Stylesheet-Regel,
// deshalb muss der Darkmode-Override hier ebenfalls per Inline-Style passieren —
// im Light-Modus wird dafür der von Storyblok gesetzte Ursprungswert wiederhergestellt.
const DARK_VARIABLES = {
    "--color-Background-Primary": "#1E1B16",
    "--color-About-Background": "#25211B",
    "--color-Footer-Background": "#171511",
    "--color-text-primary": "#C8C8C8",
    "--color-text-secondary": "#C8C8C8",
    "--color-text-link": "#C8C8C8",
    "--color-text-footer": "#C8C8C8",
};

function getInitialTheme() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
        return stored;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function useDarkMode() {
    const [theme, setTheme] = useState(getInitialTheme);
    const originalValues = useRef(null);

    useEffect(() => {
        const root = document.documentElement;

        if (originalValues.current === null) {
            originalValues.current = Object.fromEntries(
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
            Object.entries(originalValues.current).forEach(([property, value]) => {
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