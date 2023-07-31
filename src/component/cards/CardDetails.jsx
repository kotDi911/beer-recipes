import {useCallback} from "react";
import {useNavigate} from "react-router";
import {Ingredients} from "../ingredients/Ingredients";
import {Method} from "../method/Method";


const CardDetails = ({recipe}) => {
    const {
        image_url,
        name,
        tagline,
        description,
        abv,
        ibu,
        ebc,
        srm,
        ph,
        target_fg,
        target_og,
        boil_volume,
        volume,
        ingredients,
        brewers_tips,
        contributed_by,
        first_brewed,
        attenuation_level,
        food_pairing,
        method,
    } = recipe;
    const navigate = useNavigate();

    const table = [
        {
            name: 'Boil Vol.',
            value: `${boil_volume.value} ${boil_volume.unit}`
        },
        {
            name: 'Vol.',
            value: `${volume.value} ${volume.unit}`
        },
        {
            name: 'ABV',
            value: `${abv}`
        },
        {
            name: 'EBC',
            value: `${ebc}`
        },
        {
            name: 'SRM',
            value: `${srm}`
        },
        {
            name: 'PH',
            value: `${ph}`
        },
        {
            name: 'IBU',
            value: `${ibu}`
        },
        {
            name: 'OG',
            value: `${target_og}`
        },
        {
            name: 'FG',
            value: `${target_fg}`
        }
    ]

    const info = [
        {
            name: 'Contributed by: ',
            value: `${contributed_by}`
        },
        {
            name: 'First brewed: ',
            value: `${first_brewed}`
        },
        {
            name: 'Attenuation level: ',
            value: `${attenuation_level}`
        },
        {
            name: 'Food pairing: ',
            value: `${food_pairing.map((item, index) => index + 1 === food_pairing.length ? item + '.' : item + ', ')}`
        },
        {
            name: 'Description: ',
            value: `${description}`
        },
        {
            name: 'Brewers tips: ',
            value: `${brewers_tips}`
        }
    ]

    const handleGoBack = useCallback(() => {
        navigate('/');
    }, [navigate]);
    return (

        <div className='details__header flex column'>
            <div className='flex'>
                <div className='img__cont'>
                    <img className='details__img' src={image_url} alt=''/>
                </div>
                <div className='w-100'>
                    <h1> {name} </h1>
                    <h3> {tagline} </h3>
                    {
                        info.map((item) => (
                            <p key={item.name} className='description-text'><b>{item.name}</b>{item.value} </p>))
                    }
                </div>
            </div>
            <div className='details__grid'>
                {table.map((item) => (<h4 key={item.name} className='col__header'>{item.name}</h4>))}
                {table.map((item, index) => (<p key={index} className='row'>{item.value}</p>))}
            </div>
            <Ingredients ingredients={ingredients}/>
            <Method method={method}/>
            <span className='details__close-btn' onClick={handleGoBack}> X </span>
        </div>
    )
}

export default CardDetails;