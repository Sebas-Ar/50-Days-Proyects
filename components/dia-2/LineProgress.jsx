import { useEffect, useState } from "react"
import LineNumber from "./LineNumber"
import LineOptions from "./LineOptions"

const LineProgress = () => {

	const [numCount, setNumCount] = useState(5)
	const [numSelecte, setnumSelecte] = useState(1)
	const [LineNumberList, setLineNumberList] = useState([])


	useEffect(() => {
		const numberList = []

		for (let i = 1; i <= numCount; i++) {
			numberList.push(
				<LineNumber
					num={i}
					setnumSelecte={setnumSelecte}
					numSelecte={numSelecte}
				/>
			)
		}

		setLineNumberList(numberList)
	}, [numSelecte])


	return <div className="container">

		<div className="line">
			{LineNumberList}
		</div>

		<LineOptions
			setnumSelecte={setnumSelecte}
			numSelecte={numSelecte}
			numCount={numCount}
		/>

		<style jsx>{`

			.container {
				
			}

			.line {
				width: 500px;
				height: 5px;
				background-color: var(--gray);
				position: relative;
				display: flex;
				justify-content: space-between;
			}

			.line:before {
				content: '';
				position: absolute;
				width: ${((numSelecte - 1) * 100) / (numCount - 1)}%;
				height: 100%;
				background-color: var(--blue);
				transition: width .5s;
			}

		`}</style>
	</div>
}

export default LineProgress