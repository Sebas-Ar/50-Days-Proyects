import RamdomChoise from "../../components/dia-13/RamdomChoise"

const index = () => {
	return <div className="container">

		<RamdomChoise />

		<style jsx>{`

			.container {
				min-height: 100vh;
				display: grid;
				place-items: center;
				background-color: var(--blue)
			}

		`}</style>
	</div>
}

export default index