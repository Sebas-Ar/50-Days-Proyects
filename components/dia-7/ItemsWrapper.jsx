import { useState } from "react"
import Item from "./Item"

const ItemsWrapper = () => {

	const [left, setLeft] = useState(false)
	const [rigth, setRight] = useState(false)

	return <div className="container">

		<section onMouseOver={() => setLeft(true)} onMouseLeave={() => setLeft(false)} className="uno">
			<Item
				title="Playstation 5"
				img="https://50projects50days.com/projects/split-landing-page/ps.jpg"
				backgroundColor="#00f"
				buttonColor="#5754EC"
			/>
		</section>
		<section onMouseOver={() => setRight(true)} onMouseLeave={() => setRight(false)} className="dos">
			<Item
				title="XBox Series X"
				img="https://50projects50days.com/projects/split-landing-page/xbox.jpg"
				backgroundColor="#000"
				buttonColor="#1C7A1C"
			/>
		</section>

		<style jsx>{`
			.container {
				height: 100vh;
			}

			section {
				display: inline-block;
				height: 100%;
				transition: width 2s cubic-bezier(0.9, 0.32, 0, 0.82);
			}

			.uno {
				background-color: red;
				width: ${left ? '70' : rigth ? '30' : '50'}%;
			}

			.dos {
				background-color: blue;
				width: ${rigth ? '70' : left ? '30' : '50'}%;
			}
		`}</style>
	</div>
}

export default ItemsWrapper