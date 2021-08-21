import { useEffect, useState } from "react"

const Key = () => {

	const [key, setKey] = useState({})

	useEffect(() => {

		window.addEventListener('keydown', ({ key, keyCode, code }) => {
			setKey({
				key,
				keyCode,
				code
			})
		})

	}, [])

	return <div>
		{
			JSON.stringify(key) === '{}'
				?
				<div className="key initial">Press any key to get the keyCode</div>
				:
				<div className="container">
					<div className="key">
						<span>event.key</span>
						<p>{key.key}</p>
					</div>
					<div className="key">
						<span>event.keyCode</span>
						<p>{key.keyCode}</p>
					</div>
					<div className="key">
						<span>event.code</span>
						<p>{key.code}</p>
					</div>
				</div>

		}

		<style jsx>{`

			.key {
				background-color: #eee;
				border: 1px solid #888;
				display: grid;
				place-items: center;
				position: relative;
				width: 9rem;
				height: 4rem;
			}

			.container {
				display: flex;
				flex-wrap: wrap;
				justify-content: center;
				grid-column-gap: 2rem;
				grid-row-gap: 2rem;
			}


			.key > span {
				position: absolute;
				display: block;
				width: 100%;
				top: -1.5rem;
				text-align: center;
				color: #444;
				font-size: .8rem;
			}

			p {
				font-size: 1.3rem;
			}

			.initial {
				width: auto;
				padding: 0 2rem;
				font-size: 1.3rem;
			}

		`}</style>
	</div>
}

export default Key