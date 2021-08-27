const Option = ({ text, index, numAlt }) => {
	return <span>
		{text}
		<style jsx>{`
		
			span {
				color: white;
				background-color: ${index === numAlt ? 'darkblue' : 'orange'};
				padding: .5rem 1rem;
				border-radius: 2rem;
			}
		
		`}</style>
	</span>
}

export default Option