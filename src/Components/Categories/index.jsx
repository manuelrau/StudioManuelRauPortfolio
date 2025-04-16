import { useEffect, useState } from 'react'
import { getArticlesWithTags } from "../../Services/fetchingAPI.js"
import {Wrapper, Tag} from "./styles.js";
import LandingPage from "../LandingPage/index.jsx";


const Categories = () => {

    const [categories, setcategories] = useState([]);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [clickedTags, setClickedTags] = useState([])

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

    const handleTagClick = (tag) => {
        if (clickedTags.includes(tag)) {
            setClickedTags(clickedTags.filter((t) => t !== tag))
        }
        else {
            setClickedTags([...clickedTags, tag])
        }
    }
    if (!hasLoaded) return <p>Lade Kategorien...</p>;


    return(
        <>
            <Wrapper>
                {categories.map((c) => (
                    <Tag
                        key={c}
                        className={clickedTags.includes(c) ? 'selected' : ''}
                        onClick={() => handleTagClick(c)}>{c}</Tag>
                ))}
            </Wrapper>
            {/* Übergabe von daten */}
            {handleTagClick.length > 0 && <LandingPage clickedTags={clickedTags} />}
        </>
    )
}

export default Categories