import { useNavigate } from 'react-router';
import { useRecipe } from '../store/store';
import delBtn from '../assets/delete.svg'

const PanelCard = (recipe) => {
    const delSelectedRecipes = useRecipe((state) => state.delSelectedRecipes);
    const { name, id } = recipe;
    const navigation = useNavigate();

    const deleteCard = () => {
        delSelectedRecipes(id);
    }

    const goToDetails = () => {
        navigation(`/details/${id}`);
    }

    return (
        <div className='flex panel__card-cont'>
            <div className='flex space-b panel__card' onClick={goToDetails}>
                <p className='panel__card-title'>{name}</p>
            </div>
            <button className='panel__del-btn' onClick={deleteCard} >
                <img src={delBtn} alt=''/>
            </button>
        </div>
    )
}

export default PanelCard;
;