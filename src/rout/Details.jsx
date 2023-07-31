import {useEffect, useRef} from "react";
import {useParams} from "react-router";
import CardDetails from "../component/cards/CardDetails";
import {useRecipe} from "../component/store/store";


const Details = () => {
    const params = useParams();
    const recipes = useRecipe((state) => state.recipes)
    const myScrollRef = useRef(null);

    useEffect(() => {
        myScrollRef.current.scrollTop = 0;
    })

    return (
        <div className='details__cont' ref={myScrollRef}>
            {
                recipes.map((recipe) =>
                    recipe.id === Number(params.id) && (<CardDetails key={recipe.name} recipe={recipe}/>)
                )
            }
        </div>
    )
}
export {Details};