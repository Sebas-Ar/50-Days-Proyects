const Paragraph = ({ text }) => {
	return <p>

		{text}

		<style jsx>{`

			p {
				text-align: justify;
				line-height: 1.5rem;
				color: #000A;
				margin-bottom: 2rem;
			}

		`}</style>
	</p>
}

export default Paragraph