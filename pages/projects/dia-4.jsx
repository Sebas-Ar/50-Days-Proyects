import Layout from "../../components/dia-4/layout/Layout"
import Search from "../../components/dia-4/search/Search"
import Head from 'next/head'

const index = () => {
	return (
		<Layout>
			<Head>
				<title>Dia 1</title>
			</Head>
			<Search />
		</Layout>
	)
}

export default index