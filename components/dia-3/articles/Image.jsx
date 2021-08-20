const Image = ({ title, url, alt }) => {
	return <div className="container">

		<h3>{title}</h3>
		<img src={url} alt={alt} />

		<style jsx>{`

			.container {
				
			}

			h3 {
				font-size: 1.5rem;
				margin-bottom: 1.5rem
			}

			img {
				width: 100%;
				margin-bottom: 1.5rem
			}

		`}</style>
	</div>
}

export default Image