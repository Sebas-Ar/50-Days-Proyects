import LineProgress from "../../components/dia-2/LineProgress"
import Head from 'next/head'
const ElPepe = () => {
	return <div className="container">
		<Head>
			<title>Dia 2</title>
		</Head>

		<LineProgress />

		<style jsx>{`

			.container {
				height: 100vh;
				display: grid;
				justify-content: center;
				align-items: center;
			}

		`}</style>
	</div>
}

export default ElPepe