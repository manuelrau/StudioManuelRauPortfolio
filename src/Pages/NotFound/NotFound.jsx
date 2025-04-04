import React from 'react';
import { useRouteError } from "react-router-dom";

function NotFoundPage() {
    const error = useRouteError();
    console.log(error);
    return(
        <>
            <h1>Da ist etwas schief gelaufen </h1>
            <p>Leider konnten wir die Seite nicht finden</p>
            <pre>{error.statusText ||error.message}</pre>
        </>
    )
}

export default NotFoundPage;