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

		const textList = text.split(',').map(word =>
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

				setNumAlt((estadoActual) => generateNumAlt(estadoActual))
				count++
				if (count === optionList.length * 4) clearInterval(timer)

			}, 150)

		}
	}, [isEnterDown])

	const generateNumAlt = (beforeValue) => {

		const numOptions = optionList.length - 1
		const numRand = Math.round(Math.random() * numOptions)

		return numRand === beforeValue
			? generateNumAlt(beforeValue)
			: numRand

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