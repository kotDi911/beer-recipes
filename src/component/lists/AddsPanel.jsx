import PanelCard from "../cards/PanelCard";

const AddsPanel = ({ recipes }) => {
    return (
        <div className='panel'>
            {recipes.map(recipe => <PanelCard key={recipe.id} {...recipe} />)}
        </div>
        )
}

export { AddsPanel };