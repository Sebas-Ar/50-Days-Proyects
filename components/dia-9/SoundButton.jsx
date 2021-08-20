const SoundButton = ({ title, audioSrc }) => {

	const activeSound = () => {
		const audio = document.createElement('audio');
		audio.src = audioSrc
		audio.play()
	}

	return <button onClick={activeSound}>

		{title}

		<style jsx>{`

			button {
				display: inline-block;
				margin: 1rem;
				padding: 2rem;
				color: #fff;
				font-size: 1.5rem;
				background-color: #6C38A0;
				border: none;
				border-radius: .5rem;
				cursor: pointer;
			}

		`}</style>
	</button>
}

export default SoundButton