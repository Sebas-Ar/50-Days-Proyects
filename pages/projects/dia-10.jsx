import Jokes from "../../components/dia-10/Jokes"

const index = () => {
	return <div className="container">

		<Jokes />

		<style jsx>{`

			.container {
				min-height: 100vh;
				display: grid;
				justify-content: center;
				align-items: center;
				background-color: var(--blue)
			}

		`}</style>
	</div>
}

export default index