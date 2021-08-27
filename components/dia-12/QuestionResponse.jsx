import { useState } from "react"

const QuestionResponse = ({ question, response }) => {

	const [isActive, setIsActive] = useState(false);

	const changeActive = () => {
		setIsActive(!isActive)
	}

	return <li>

		<img src="/icons/comments-regular.svg" alt="iconos de dialogo" />
		<p className="question">{question}</p>
		<p className="response">{response}</p>
		<button onClick={changeActive}>
			{
				isActive
					?
					<svg className="close" viewBox="0 0 352 512">
						<path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path>
					</svg>
					:
					<svg className="open" viewBox="0 0 448 512">
						<path fill="currentColor" d="M413.1 222.5l22.2 22.2c9.4 9.4 9.4 24.6 0 33.9L241 473c-9.4 9.4-24.6 9.4-33.9 0L12.7 278.6c-9.4-9.4-9.4-24.6 0-33.9l22.2-22.2c9.5-9.5 25-9.3 34.3.4L184 343.4V56c0-13.3 10.7-24 24-24h32c13.3 0 24 10.7 24 24v287.4l114.8-120.5c9.3-9.8 24.8-10 34.3-.4z"></path>
					</svg>
			}
		</button>


		<style jsx>{`

			li {
				position: relative;
				background-color: ${isActive ? 'white' : '#eee'};
				padding: 2rem;
				border-radius: .5rem;
				border: 1px solid #aaa;
				overflow: hidden;
				box-shadow: 0 5px 10px 0 ${isActive ? '#0003' : '0000'};
				transition: box-shadow .5s;
			}

			p {
				position: relative;
				z-index: 1;
			}

			.question {
				font-size: 1.2rem;
			}

			.response {
				font-weight: 100;
				margin-top: ${isActive ? '2rem' : '0'};
				height: ${isActive ? '1rem' : '0'};
				transition: height .5s, margin-top .5s;
				overflow: hidden;
			}

			img {
				position: absolute;
				height: 100%;
				z-index: 0;
				top: 0;
				left: -2rem;
				opacity: ${isActive ? '1' : '0'};
				transition: opacity .5s;
			}

			button {
				position: absolute;
				top: 1.7rem;
				right: 2rem;
				z-index: 1;
				width: 2rem;
				height: 2rem;
				display: grid;
				place-items: center;
				border: none;
				cursor: pointer;
				border-radius: 50%;
				background-color: ${isActive ? '#999' : '#eee'};
				
				outline: none;
			}

			svg {
				width: 70%;
			}

			.close {
				color: white;
			}

			.open {
				color: black;
			}

		`}</style>
	</li>
}

export default QuestionResponse