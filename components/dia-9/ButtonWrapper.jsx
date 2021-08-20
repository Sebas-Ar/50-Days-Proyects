import { useState } from "react"
import SoundButton from "./SoundButton"

const ButtonWrapper = () => {

	const [soundList, setSoundList] = useState([
		'applause',
		'boo',
		'gasp',
		'tada',
		'victory'
	])

	return <div className="container">

		{
			soundList.map(sound => (
				<SoundButton key={sound} title={sound} audioSrc={`https://50projects50days.com/projects/sound-board/sounds/${sound}.mp3`} />
			))
		}


		<style jsx>{`

			.container {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
			}

		`}</style>
	</div>
}

export default ButtonWrapper