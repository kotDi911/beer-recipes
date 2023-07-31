import { Hops } from "../ingredients/Hops"
import { Malt } from "../ingredients/Malt"

const Ingredients = ({ ingredients }) => {
    const { hops, malt, yeast } = ingredients
    return (
        <div className='container'>
            <h2 className='align-center chapter'>Ingredients</h2>
            <div className='flex column'>
                <div className='hops'>
                    <h3 className='title'>Hops</h3>
                    <Hops hops={hops} />
                </div>
                <div className='malt'>
                    <h3 className='title'>Malt</h3>
                    <Malt malt={malt} />
                </div >
                <div className='yeast__grid'>
                    <p className='col__header'>Yeast</p>
                    <p className='row'>{yeast}</p>
                </div>
            </div>
        </div>
    )
}

export { Ingredients };