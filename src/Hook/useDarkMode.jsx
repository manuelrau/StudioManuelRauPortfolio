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
    "--color-Background-Menu": "#302a2a",
    "--color-tags-secondary": "#ffffff",
};

// Nicht von Storyblok verwaltete Properties: müssen im Light-Modus explizit
// gesetzt werden, sonst gewinnt bei OS-Dark-Preference die
// @media (prefers-color-scheme: dark) Regel aus src/styles.js wieder, obwohl
// der Nutzer manuell "light" gewählt hat.
const LIGHT_VARIABLES = {
    "--color-Background-Menu": "#D6D6D6",
    "--color-tags-secondary": "#000000",
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
        const media = window.matchMedia("(prefers-color-scheme: dark)");
        const handleSystemChange = (event) => {
            // Nur automatisch dem System folgen, solange der Nutzer nicht manuell umgeschaltet hat
            if (!localStorage.getItem(STORAGE_KEY)) {
                setTheme(event.matches ? "dark" : "light");
            }
        };
        media.addEventListener("change", handleSystemChange);
        return () => media.removeEventListener("change", handleSystemChange);
    }, []);

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
            Object.entries(LIGHT_VARIABLES).forEach(([property, value]) => {
                root.style.setProperty(property, value);
            });
        }

        root.setAttribute("data-theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prevTheme => {
            const nextTheme = prevTheme === "dark" ? "light" : "dark";
            localStorage.setItem(STORAGE_KEY, nextTheme);
            return nextTheme;
        });
    };

    return [theme, toggleTheme];
}

export default useDarkMode;