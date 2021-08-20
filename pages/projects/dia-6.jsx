import Head from 'next/head'
import ItemScroll from '../../components/dia-6/ItemScroll'

const index = () => {
	return <div>
		<Head>
			<title>Dia 6</title>
		</Head>

		<h1>Scroll to see the animation</h1>
		<ItemScroll direcction={true} />
		{/* <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><h1>a</h1> */}
		<ItemScroll direcction={false} />
		<ItemScroll direcction={true} />
		<ItemScroll direcction={false} />
		<ItemScroll direcction={true} />
		<ItemScroll direcction={false} />
		<ItemScroll direcction={true} />
		<ItemScroll direcction={false} />

		<style jsx>{`

			h1 {
				text-align: center;
				margin: 1rem 0;
				font-size: 2rem;
			}

		`}</style>
	</div>
}

export default index