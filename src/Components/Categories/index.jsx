import { useEffect, useState } from 'react'
import { getArticlesWithTags } from "../../Services/fetchingAPI.js"
import {Wrapper, Tag} from "./styles.js";
import Images from "../Images/index.jsx";
import {useStoryblok} from "@storyblok/react";


const Categories = () => {
    const story = useStoryblok("home", {version: "draft"})

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
                        selected={clickedTags.includes(c)}
                        onClick={() => handleTagClick(c)}>{c}</Tag>
                ))}
            </Wrapper>
            {/* Übergabe von daten */}
            {handleTagClick.length > 0 && <Images story={story} clickedTags={clickedTags} />}
        </>
    )
}

export default Categories