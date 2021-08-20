const Item = ({ title, img, backgroundColor, buttonColor }) => {
	return <div className="container">

		<h2>{title}</h2>
		<a href="#">Buy Now</a>

		<style jsx>{`

			.container {
				box-sizing: border-box;
				height: 100%;
				background: url("${img}");
				background-size: cover;
				display: grid;
				justify-content: center;
				padding-bottom: 6rem;
				position: relative;
				overflow: hidden;
			}

			.container::before {
				content: "";
				position: absolute;
				width: 100%;
				height: 100%;
				background-color: ${backgroundColor}7;
			}

			a {
				text-decoration: none;
				border: 4px solid white;
				align-self: flex-start;
				text-align: center;
				justify-self: center;
				padding: 1.5rem 3.5rem;
				color: white;
				text-transform: uppercase;
				font-weight: 700;
				z-index: 1;
				transition: border .2s, background .2s;
			}

			a:hover {
				border-color: ${buttonColor};
				background-color: ${buttonColor}
			}

			h2 {
				color: white;
				font-size: 2rem;
				font-weight: 700;
				align-self: flex-end;
				margin-bottom: 1.5rem;
				z-index: 1;
			}

			@media screen and (min-width: 1000px) {
				h2 {
					font-size: 3rem;
				}
			}

			@media screen and (min-width: 1200px) {
				h2 {
					font-size: 4rem;
				}
			}

		`}</style>
	</div>
}

export default Item