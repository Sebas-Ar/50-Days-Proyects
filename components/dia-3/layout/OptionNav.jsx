import { useState } from "react"
import ButtonNav from "./ButtonNav"

const OptionNav = ({ rotateActive, setRotateActive }) => {

	const [positionSaved, setPositionSaved] = useState(0)

	const changeRotate = () => {

		if (rotateActive === false) {

			setPositionSaved(window.scrollY)

			const timer = setInterval(() => {
				window.scroll(0, window.scrollY - 3)
				if (window.scrollY === 0) {
					clearInterval(timer)
					setRotateActive(true)
				}
			}, 1)

		} else {

			setRotateActive(false)

			const timer = setInterval(() => {
				window.scroll(0, window.scrollY + 3)
				if (window.scrollY >= positionSaved) {
					clearInterval(timer)
				}
			}, 1)

		}


	}

	return <div className="container">

		<ButtonNav column="1/2" row="2/3" changeRotate={changeRotate}>
			<svg viewBox="0 0 352 512">
				<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z" />
			</svg>
		</ButtonNav>

		<ButtonNav column="2/3" row="2/3" changeRotate={changeRotate}>
			<svg viewBox="0 0 448 512">
				<path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
			</svg>
		</ButtonNav>

		<style jsx>{`

			.container {
				padding: 20px;
				height: 200px;
				width: 200px;
				background-color: #FF7979;
				border-radius: 50%;
				display: grid;
				justify-items: center;
				align-items: center;
				grid-template-columns: 1fr 1fr;
				grid-template-rows: 1fr 1fr;
				position: fixed;
				top: 0;
				left: 0;
				transform: 
					translate(-50%, -50%) 
					rotate(${rotateActive ? '-90' : '0'}deg);
				transition: transform .5s;
			}

		`}</style>
	</div>
}

export default OptionNav