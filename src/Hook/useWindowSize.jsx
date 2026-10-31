import { useState, useEffect } from "react";

function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    } );

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        }

        window.addEventListener("resize", handleResize);

        // einmal sofort aufrufen, sonst bleibt width/height bis zum ersten Resize-Event
        // auf "undefined" (z.B. direkt nach dem initialen Laden der Seite)
        handleResize()

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;