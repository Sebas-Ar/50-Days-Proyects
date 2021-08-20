import { useState } from "react"

const Search = () => {

	const [isSearchActive, setIsSearchActive] = useState(false)

	return <div className="container">

		<input placeholder="Search..." type="text" name="" />
		<button onClick={() => { setIsSearchActive(!isSearchActive) }}>
			<svg viewBox="0 0 512 512">
				<path fill="currentColor" d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z" />
			</svg>
		</button>

		<style jsx>{`

			.container {
				display: grid;
				grid-template-columns: auto auto;
			}

			input {
				width: ${isSearchActive ? '10rem' : '0'};
				border: none;
				border-radius: 0;
				padding: 0 ${isSearchActive ? '1rem' : '0'};
				font-size: 1.1rem;
				transition: width .5s, padding .5s;
				outline: none;
			}

			input::-webkit-input-placeholder {
				color: #0008;
			}
			
			button {
				border: none;
				border-radius: 0;
				background: white;
				cursor: pointer;
			}

			svg {
				height: 1.5rem;
				padding: 0.5rem;
			}

		`}</style>
	</div>
}

export default Search