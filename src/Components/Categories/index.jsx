import { useEffect, useState } from 'react'
import { getArticlesWithTags } from "../../Services/fetchingAPI.js"
import {Wrapper} from "./styles.js";


const Categories = () => {

    const [categories, setcategories] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);

    useEffect(() => {

   const fetchCategories = async () => {
       if(hasLoaded) return;

       const articles = await getArticlesWithTags()

       const allTags = Array.from(
           new Set (articles.flatMap((article) => article.tags)),

       );
       setcategories(allTags);
       setHasLoaded(true);
   };
   fetchCategories();
   }, [setHasLoaded]);

    if (!hasLoaded) return <p>Lade Kategorien...</p>;
    console.log(categories);

    return(
        <>
            <Wrapper>
                {categories.map((c, idx) => (
                    <p key={idx}>{c}</p>
                ))}
                <p>Test</p>
            </Wrapper>
        </>
    )
}

export default Categories