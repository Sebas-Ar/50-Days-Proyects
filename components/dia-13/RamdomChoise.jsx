import { useEffect, useState } from "react"
import Option from "./Option"
import TextOptions from "./TextOptions"

const RamdomChoise = () => {

	const [text, setText] = useState('')
	const [optionList, setOptionList] = useState([])
	const [isEnterDown, setIsEnterDown] = useState(false)
	const [numAlt, setNumAlt] = useState(-1)

	useEffect(() => {

		setNumAlt(-1)

		const textSplited = text.split(',')

		const textList = textSplited.map(word =>
			word.split(' ')
				.filter(w => w !== '')
				.join(' ')
		)

		const cleanedText = textList.filter(opt => opt !== '')
			.filter(opt => opt !== '\n')

		setOptionList(cleanedText)

	}, [text])

	useEffect(() => {
		if (isEnterDown && optionList.length >= 2) {

			let count = 0

			const timer = setInterval(() => {

				setNumAlt((estadoActual) => {
					let alt = generateNumAlt()
					while (alt === estadoActual) alt = generateNumAlt()
					return alt
				})

				count++

				if (count === optionList.length * 4) clearInterval(timer)

			}, 150)

		}
	}, [isEnterDown])

	const generateNumAlt = () => {
		const numOptions = optionList.length - 1
		return Math.round(Math.random() * numOptions)
	}

	return <div className="container">

		<p>
			Enter all of the choices divided by a comma (',').
			<br />
			Press enter when you're done
		</p>
		<TextOptions setText={setText} setIsEnterDown={setIsEnterDown} />
		<div className="option-list">
			{
				optionList.map((opt, index) => (
					<Option key={index} index={index} numAlt={numAlt} text={opt} />
				))
			}
		</div>

		<style jsx>{`

			.container {
				width: 30rem;
			}

			p {
				text-align: center;
				color: white;
				font-size: 1.2rem;
			}

			.option-list {
				display: flex;
				flex-wrap: wrap;
				grid-gap: 1rem;
			}

		`}</style>
	</div>
}

export default RamdomChoise