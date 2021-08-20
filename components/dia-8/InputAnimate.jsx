const InputAnimate = ({ name }) => {
	return <label>

		<input id="input" type="text" required />

		<div className="text">
			{
				name.split('').map((letter, index) => (
					<span style={{ transitionDelay: `${index * 0.1}s` }}>{letter}</span>
				))
			}
		</div>

		<style jsx>{`

			label {
				position: relative;
			}

			.text {
				position: absolute;
				top: 0;
			}

			input {
				background-color: unset;
				border: none;
				border-bottom: 2px solid white;
				outline: none;
				color: white;
				width: 100%;
				padding-bottom: 1rem;
			}

			span {
				display: inline-block;
				cursor: text;
				transition: transform .5s, color .5s; 
			}

			input:focus + .text span {
				transform: translateY(-1.5rem);
				color: var(--blue)
			}

			input:not(:invalid) + .text span {
				transform: translateY(-1.5rem);
				color: var(--blue)
			}

		`}</style>
	</label>
}

export default InputAnimate