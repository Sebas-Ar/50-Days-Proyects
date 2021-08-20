


const Img = ({ id, childSelected, setChildSelected, image, title }) => {

	return <article onClick={() => setChildSelected(id)} className="container">

		<img src={image} alt="" />
		<h3>{title}</h3>

		<style jsx>{`

			.container {
				display: inline-block;
				width: ${id === childSelected ? '400px' : '80px'};
				height: 500px;
				overflow: hidden;
				border-radius: 40px;
				cursor: pointer;
				margin: 0 20px;
				transition: width 0.5s;
				position: relative;
			}

			img {
				height: 100%;
				width: 100%;
				object-fit: cover;
			}

			h3 {
				color: white;
				font-size: 30px;
				position: absolute;
				bottom: 30px;
				left: 30px;
				opacity: ${id === childSelected ? '1' : '0'};
				transition: opacity 0.5s;
			}

		`}</style>
	</article>
}

export default Img