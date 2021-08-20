import InputAnimate from "./InputAnimate"

const Form = () => {
	return <form>

		<h1>Please Login</h1>

		<InputAnimate name="Email" />
		<InputAnimate name="Password" />

		<button>Login</button>

		<p>Don't have an account? <a href="#">Register</a></p>

		<style jsx>{`

			form {
				background-color: var(--blue-dark);
				color: white;
				border-radius: .5rem;
				display: grid;
				grid-row-gap: 3rem;
				padding: 3rem;
				width: 18rem;
			}

			h1 {
				text-align: center;
				font-size: 2rem;
			}

			button {
				width: 100%;
				background-color: var(--blue);
				border: none;
				padding: 1rem 0; 
				border-radius: .5rem;
			}

			a {
				color: var(--blue);
				text-decoration: none;
			}

		`}</style>
	</form>
}

export default Form