import Form from "../../components/dia-8/Form"

const index = () => {


	return <div className="container">

		<Form />

		<style jsx>{`

			.container {
				height: 100vh;
				display: grid;
				justify-items: center;
				align-items: center;
				background-color: var(--blue)
			}

		`}</style>
	</div>
}

export default index