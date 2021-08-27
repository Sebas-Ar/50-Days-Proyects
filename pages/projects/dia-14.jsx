import NavAnimate from "../../components/dia-14/NavAnimate"

const index = () => {
	return <div className="container">

		<NavAnimate />

		<style jsx>{`

			.container {
				position: relative;
				min-height: 100vh;
				display: grid;
				place-items: center;
			}

			.container::before {
				top: 0;
				position: absolute;
				content: '';
				width: 100%;
				height: 50%;
				background-color: #eafbff;
			}

			.container::after {
				bottom: 0;
				position: absolute;
				content: '';
				width: 100%;
				height: 50%;
				background-color: #5290f9;
			}	

		`}</style>
	</div>
}

export default index