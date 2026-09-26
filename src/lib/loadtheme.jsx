import React from 'react';

export async function loadTheme() {
    const token = import.meta.env.VITE_STORYBLOK_TOKEN;
    const slugs = ["background", "text-color"]; // deine Slugs aus Storyblok

    for (const slug of slugs) {
        try {
            const res = await fetch(
                `https://api.storyblok.com/v2/cdn/datasource_entries?datasource=${slug}&token=${token}&cv=${Date.now()}`
            );
            const data = await res.json();
            console.log(slug, data);

            data.datasource_entries.forEach(({ name, value }) => {
                document.documentElement.style.setProperty(`--color-${name}`, value);
            });
        } catch (e) {
            console.warn(`Datasource "${slug}" konnte nicht geladen werden`, e);
        }
    }
}