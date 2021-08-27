import { useState } from "react"

const NavAnimate = () => {

	const [isActive, setIsActive] = useState(false)

	return <div className="container">

		<nav>
			<ul>
				<li><a href="#">Home</a></li>
				<li><a href="#">Works</a></li>
				<li><a href="#">About</a></li>
				<li><a href="#">Contact</a></li>
			</ul>
		</nav>
		<button onClick={() => setIsActive(!isActive)}>
			<div className="line1"></div>
			<div className="line2"></div>
		</button>

		<style jsx>{`

			.container {
				position: relative;
				z-index: 1;
				background-color: white;
				border-radius: .2rem;
				box-shadow: 0 0 10px 0 #0003;
				padding: 1.5rem;
				display: flex;
				grid-column-gap: ${isActive ? "1.5" : '0'}rem;
				transition: grid-column-gap .5s;
			}

			ul {
				display: flex;
				align-items: center;
				height: 100%;
			}

			li {
				display: inline-block;
				place-items: center;
				width: ${isActive ? "5rem" : '0'};
				overflow: hidden;
				transition: width .5s;
			
			}

			a {
				text-decoration: none;
				padding: 1rem;
				color: black;
				
			}

			button {
				position: relative;
				background-color: unset;
				border: none;
				cursor: pointer;
				height: 1.5rem;
				width: 1.5rem;
				outline: none;
				display: block;
				padding: 0;
			}

			.line1, .line2 {
				position: absolute;
				height: 2px;
				width: 1.5rem;
				background-color: #5290f9;
				transition: transform .5s;
			}

			.line1 {
				transform: rotate(${isActive ? '405' : '0'}deg) 
					translateY(-${isActive ? '0' : '6'}px);

			}

			.line2 {
				transform: rotate(-${isActive ? '405' : '0'}deg)
				translateY(${isActive ? '0' : '6'}px);;
			}
		`}</style>
	</div>
}

export default NavAnimate