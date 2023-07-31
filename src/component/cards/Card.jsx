import { useRecipe } from '../store/store';
import { useEffect } from 'react';
import { useNavigate } from 'react-router';

const Card = (recipe) => {
	const { addSelectedRecipes, delSelectedRecipes } = useRecipe((state) => ({
		addSelectedRecipes: state.addSelectedRecipes,
		delSelectedRecipes: state.delSelectedRecipes
	}));
	const { id, name, image_url, selected, tagline } = recipe;
	const navigate = useNavigate();

	useEffect(() => {
	  
	}, [selected])

	const handleClick = (e) => {
		navigate(`/details/${id}`);
	}
	const selectCard = (e) => {
		e.preventDefault();
		!selected ? addSelectedRecipes(recipe) : delSelectedRecipes(id);
	}

	return (
		<div className={`flex center card__cont ${selected ? 'selected' : ''}`} onClick={handleClick} onContextMenu={selectCard}>
			<img className='card__img' src={image_url} alt='' />
			<div className='card__text'>
				<h3 className='card__title'>{name}</h3>
				<p className='card__tag'>{tagline}</p>
			</div>
		</div>
	)
}

export default Card;