
const LineNumber = ({ num, setnumSelecte, numSelecte }) => {


	return <button onClick={() => setnumSelecte(num)} className="container">

		{num}

		<style jsx>{`

			.container {
				width: 30px;
				height: 30px;
				background-color: white;
				border-radius: 50%;
				border: solid 3px ${num <= numSelecte ? 'var(--blue)' : 'var(--gray)'};
				transform: translateY(-45%);
				cursor: pointer;
				transition: border .5s;
			}

		`}</style>
	</button>
}

export default LineNumber