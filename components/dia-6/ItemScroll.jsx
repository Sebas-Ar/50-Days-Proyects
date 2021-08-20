import { useEffect, useRef, useState } from "react"

const ItemScroll = ({ direcction }) => {

	const element = useRef(null)
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {

		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting === true) {
				console.log(entry.isIntersecting)
				setIsVisible(true)
			}
		})

		observer.observe(element.current)


	}, [])

	return <div className="visible" ref={element} >
		<section className="container">

			<h2>Content</h2>

		</section>
		<style jsx>{`

			
			.container {
				background-color: var(--blue);
				width: 25rem;
				height: 15rem;
				border-radius: 1rem;
				display: grid;
				justify-content: center;
				align-content: center;
				margin: auto;
				transform: translateX(${direcction ? '-' : ''}${isVisible ? '0' : '1000'}px);
				box-shadow: 5px 5px 10px 0px #0006;
				transition: transform 1s;
			}

			.visible {
				overflow: hidden;
				padding: 1rem 0;
			}

			

			h2 {
				color: white;
				font-size: 2rem;
			}

		`}</style>
	</div>

}

export default ItemScroll