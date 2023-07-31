const Fermentation = ({ fermentation }) => {
	const { temp } = fermentation;
	const { value, unit } = temp;

	return (
		<div className='ferm__grid'>
			<p className='col__header'>Fermentation</p>
			<p className='row'>{value + unit}</p>
		</div>
	)
}
export { Fermentation };