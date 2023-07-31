import {useEffect, useState} from 'react';
import {AddsPanel} from './lists/AddsPanel';
import {CardList} from './lists/CardList';
import {useRecipe} from './store/store';
import {Route, Routes, useLocation, useNavigate} from 'react-router';
import {Details} from '../rout/Details';
import logo from './assets/logo.png';
import SvgBtn from "./SvgBtn";

function App() {
    const selectedRecipes = useRecipe((state) => state.selectedRecipes);
    const [isActive, setIsActive] = useState(false);
    const navigate = useNavigate();
    const {pathname} = useLocation;

    useEffect(() => {
        if (selectedRecipes.length <= 0) {
            setIsActive(false);
            pathname !== '/' && navigate('/');
        }
    }, [selectedRecipes.length])

    useEffect(() => {
        pathname !== '/' && navigate('/');
    }, [])

    const goToMain = () => {
        navigate('/');
    }

    const togglePanel = () => {
        selectedRecipes.length && setIsActive(!isActive)
    }

    return (
        <div className="App">
            <header className="App-header flex center">
                <div className="flex center">
                    <div className='header__img-cont'>
                        <img className='header__img' src={logo} alt='logo'/>
                    </div>
                    <span className='header__logo' onClick={goToMain}>Beer Recipes</span>
                </div>
                <span className='header__btn' onClick={togglePanel}>
                    <SvgBtn className={selectedRecipes.length > 0 ? 'header__btn-img active' : 'header__btn-img'}/>
                </span>
            </header>
            <div className='flex bg'>
                <Routes>
                    <Route path='/' element={<CardList/>}/>
                    <Route path='/details/:id' element={<Details/>}/>
                </Routes>
                {isActive && <AddsPanel recipes={selectedRecipes}/>}
            </div>
        </div>
    );
}

export default App;
