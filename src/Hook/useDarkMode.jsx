import { useEffect, useState } from "react";

const STORAGE_KEY = "theme";

// Hinweis: src/lib/loadtheme.jsx setzt Storyblok-Farben (Light- UND Dark-Werte,
// z.B. "Background-DARKMODE-Primary") als Inline-Style auf document.documentElement,
// bevor React überhaupt mountet. Inline-Styles gewinnen gegen jede Stylesheet-Regel,
// deshalb muss der Darkmode-Override hier ebenfalls per Inline-Style passieren —
// im Light-Modus wird dafür der von Storyblok gesetzte Ursprungswert wiederhergestellt.
//
// Für jede Ziel-Variable wird hier - falls vorhanden - der von Storyblok gelieferte
// "-DARKMODE-" Wert verwendet (statt eines statischen Hex-Codes). Felder, die in
// Storyblok (noch) keinen Dark-Mode-Eintrag haben, fallen auf einen festen Wert zurück.
const DARK_VARIABLE_SOURCES = {
    "--color-Background-Primary": { storyblokVar: "--color-Background-DARKMODE-Primary", fallback: "#190601" },
    "--color-About-Background": { storyblokVar: "--color-About-DARKMODE-Background", fallback: "#190601" },
    "--color-Footer-Background": { storyblokVar: "--color-Footer-DARKMODE-Background", fallback: "#190601" },
    "--color-text-primary": { storyblokVar: "--color-Text-DARKMODE", fallback: "#C8C8C8" },
    "--color-text-secondary": { storyblokVar: null, fallback: "#C8C8C8" },
    "--color-text-link": { storyblokVar: null, fallback: "#C8C8C8" },
    "--color-text-footer": { storyblokVar: null, fallback: "#C8C8C8" },
    "--color-Background-Menu": { storyblokVar: "--color-Background-Menu-DARKMODE", fallback: "#302a2a" },
    "--color-tags-secondary": { storyblokVar: null, fallback: "#ffffff" },
    "--color-Tags-Color": { storyblokVar: "--color-Tags-Color-DARKMODE", fallback: "#ffffff" },
};

// Nicht von Storyblok verwaltete Properties: müssen im Light-Modus explizit
// gesetzt werden, sonst gewinnt bei OS-Dark-Preference die
// @media (prefers-color-scheme: dark) Regel aus src/styles.js wieder, obwohl
// der Nutzer manuell "light" gewählt hat.
const LIGHT_VARIABLES = {
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

function resolveDarkValue(root, { storyblokVar, fallback }) {
    const storyblokValue = storyblokVar ? root.style.getPropertyValue(storyblokVar).trim() : "";
    return storyblokValue || fallback;
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
                Object.keys(DARK_VARIABLE_SOURCES).map(property => [
                    property,
                    root.style.getPropertyValue(property),
                ])
            );
        }

        if (theme === "dark") {
            Object.entries(DARK_VARIABLE_SOURCES).forEach(([property, source]) => {
                root.style.setProperty(property, resolveDarkValue(root, source));
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