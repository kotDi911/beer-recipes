import { Fermentation } from "./Fermentation";
import { MashTemp } from "./MashTemp";

const Method = ({ method }) => {
    const { fermentation, mash_temp, twist } = method;

    return (
        <div className='container'>
            <h2 className='align-center chapter'>Method</h2>
            <div>
                <h3 className='title'>Mash temp</h3>
                <MashTemp mash={mash_temp} />
            </div>
            <Fermentation fermentation={fermentation} />
            <div className="flex column twist">
                <p className="twist__title">Twist</p>
                <p className="twist__desc">{twist === null ? '-' : twist}</p>
            </div>
        </div>
    )
}
export { Method };