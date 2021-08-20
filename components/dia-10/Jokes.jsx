import axios from 'axios'
import { useEffect, useState } from 'react'

const Jokes = () => {

	const [joke, setJoke] = useState('')

	useEffect(() => {
		getJoke()
	}, [])

	const getJoke = async () => {

		const configFetch = {
			headers: {
				Accept: 'application/json'
			}
		}

		const url = 'https://icanhazdadjoke.com/'

		const response = await axios.get(url, configFetch)
		console.log(response.data.joke)
		setJoke(response.data.joke)
	}


	return <main>

		<h1>Don't Laugh Challenge</h1>
		<p>{joke}</p>
		<button onClick={getJoke}>Get Another Joke</button>

		<style jsx>{`

			main {
				background-color: white;
				border-radius: 1rem;
				padding: 2rem;
				margin: 0 3rem;
				max-width: 750px;
			}

			h1 {
				text-align: center;
				color: #777;
				font-weight: 600;
				font-size: 1.2rem;
				letter-spacing: 0.2rem;
			}

			p {
				text-align: center;
				font-size: 1.8rem;
				margin: 2rem 0;
				letter-spacing: .1rem;
				line-height: 2.5rem;
			}

			button {
				display: block;
				border: none;
				background-color: var(--blue);
				color: white;
				padding: 0.8rem 1.8rem;
				margin: auto;
				border-radius: .5rem;
				font-size: 1.1rem;
				cursor: pointer;
			}

		`}</style>
	</main>
}

export default Jokes