const RenderTable = ({ item }) => {
    const { name, amount } = item;
    const { value, unit } = amount;
    return (
        <>
            <p className='row'>{name}</p>
            <p className='row'>{value + ' ' + unit} </p>
        </>
    )
}

const Malt = ({ malt }) => {

    return (
        <>
            <div className='malt__grid'>
                <p className='col__header'>Name</p>
                <p className='col__header'>Amount</p>
                {malt.map((item, index) => (<RenderTable key={index} item={item} />))}
            </div>
        </>
    )
}
export { Malt }