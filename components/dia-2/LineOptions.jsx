import LineButton from "./LineButton"

const LineOptions = ({ setnumSelecte, numSelecte, numCount }) => {

	const next = () => {
		setnumSelecte(numSelecte + 1)
	}

	const prev = () => {
		setnumSelecte(numSelecte - 1)
	}

	return <div className="container">


		<div>
			<LineButton
				text={'Prev'}
				onClick={prev}
				disabled={numSelecte === 1}
			/>
			<LineButton
				text={'Next'}
				onClick={next}
				disabled={numSelecte === numCount}
			/>
		</div>


		<style jsx>{`

			.container {
				margin-top: 40px;
				display: grid;
				justify-content: center;
			}

		`}</style>
	</div>
}

export default LineOptions