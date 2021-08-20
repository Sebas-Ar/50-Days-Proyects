
const LineButton = ({ text, onClick, disabled }) => {

	return <button onClick={onClick} className="container" disabled={disabled}>

		{text}

		<style jsx>{`

			.container {
				margin: 0 15px;
				color: white;
				border: none;
				width: 80px;
				height: 35px;
				border-radius: 5px;
				cursor: pointer;
				background-color: var(--blue);
			}

			.container:disabled {
				background-color: var(--gray);
				cursor: not-allowed;
			}

		`}</style>
	</button>
}

export default LineButton