const columnNames = [
    {
        id: 1,
        name: 'Name'
    },
    {
        id: 2,
        name: 'Add'
    },
    {
        id: 3,
        name: 'Atribute'
    },
    {
        id: 4,
        name: 'Amount'
    }
]

const RenderTable = ({ item }) => {
    const { name, add, attribute, amount } = item;
    const { value, unit } = amount;
    return (
        <>
            <p className='row'>{name}</p>
            <p className='row'>{add}</p>
            <p className='row'>{attribute}</p>
            <p className='row'>{value + ' ' + unit} </p>
        </>
    )
}

const Hops = ({ hops }) => {

    return (
        <>
            <div className='hops__grid'>
                {columnNames.map((item) => (<p key={item.id} className='col__header'>{item.name}</p>))}
                {hops.map((item, index) => (<RenderTable key={index} item={item} />))}
            </div>
        </>
    )
}
export { Hops }