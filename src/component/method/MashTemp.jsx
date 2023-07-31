const RenderTable = ({ item }) => {
	const { duration, temp } = item;
	const { value, unit } = temp;
	return (
		<>
			<p className='row'>{duration === null ? '-' : duration}</p>
			<p className='row'>{value + ' ' + unit} </p>
		</>
	)
}

const MashTemp = ({ mash }) => {
	return (
		<div className='temp__grid'>
			<p className='col__header'>Duration</p>
			<p className='col__header'>Temp</p>
			{mash.map((item, index) => (<RenderTable key={index} item={item}/>))}
		</div>
	)
}
export { MashTemp };