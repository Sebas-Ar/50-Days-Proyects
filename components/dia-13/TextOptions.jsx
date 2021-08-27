const TextOptions = ({ setText, setIsEnterDown }) => {

	const keyDown = (e) => {

		if (e.keyCode === 13) {

			setTimeout(() => {
				e.target.value = ''
			}, 1)

			if (e.target.value !== '') {
				setIsEnterDown(true)
			}
		} else {
			setIsEnterDown(false)
		}
	}

	return <div>

		<textarea onKeyDown={keyDown} placeholder="Enter choices here..." onChange={(e) => setText(e.target.value)}></textarea>

		<style jsx>{`

			textarea {
				box-sizing: border-box;
				width: 100%;
				height: 5rem;
				padding: 1rem;
				margin: 1.5rem 0;
				border-radius: 5px;
				border: none;
				outline: none;
				font-size: 1rem;
			}
		
		`}</style>


	</div>
}

export default TextOptions