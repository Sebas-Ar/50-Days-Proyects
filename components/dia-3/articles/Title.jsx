const Title = ({ title, author }) => {
	return <hgroup>

		<h1>{title}</h1>
		<h2>{author}</h2>

		<style jsx>{`

			h1 {
				font-size: 2rem;
				margin-bottom: .5rem;
			}

			h2 {
				color: #0007;
				font-style: italic; 
				margin-bottom: 2rem;
			}


		`}</style>
	</hgroup>
}

export default Title