import { useEffect, useState } from "react"

const Loader = () => {

	const [loader, setLoader] = useState(0)

	useEffect(() => {

		const timer = setInterval(() => {

			let currentLoader

			setLoader((prevLoader) => {
				currentLoader = prevLoader + 1
				console.log(currentLoader, prevLoader)
				return currentLoader
			})

			if (currentLoader >= 100) {
				clearInterval(timer)
			}

		}, 30)

	}, [])

	return <div className="container">

		<img src="https://images.unsplash.com/photo-1576161787924-01bb08dad4a4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2104&q=80" alt="" />
		<h1>{loader}%</h1>

		<style jsx>{`

			.container {
				height: 100vh;
				overflow: hidden;
				position: relative;
				font-size: 60px;
			}

			img {
				width: 110%;
				height: 110%;
				object-fit: cover;
				transform: translate(-5%, -5%);
				filter: blur(${25 - (loader * 25 / 100)}px);
			}

			h1 {
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				opacity: ${1 - (loader / 100)};
				color: white;
				font-size: 3rem;
			}

		`}</style>
	</div>
}

export default Loader