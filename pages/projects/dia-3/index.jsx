// Layout
import Layout from "../../../components/dia-3/layout/Layout"

//components
import Image from "../../../components/dia-3/articles/Image"
import Paragraph from "../../../components/dia-3/articles/Paragraph"
import Title from "../../../components/dia-3/articles/Title"
import Head from 'next/head'

const index = () => {
	return <div>
		<Head>
			<title>Dia 3</title>
		</Head>

		<Layout>

			<Title title="Amazing Article" author="Florin Pop" />
			<Paragraph
				text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laudantium dolor doloribus explicabo reprehenderit commodi dignissimos maiores aliquid quaerat officiis dolore facere facilis, perferendis eius modi ex odit vel tempora in qui unde excepturi quam saepe ut. Unde voluptas iusto illo, amet expedita soluta saepe aspernatur debitis omnis suscipit hic! Dolore quisquam, laudantium dolorum adipisci debitis consequuntur! Et ratione deserunt deleniti, quod minima non sint tenetur! Ea nostrum odit quam aspernatur autem, iste officiis numquam molestias aliquid? Consequuntur dolor ipsum commodi adipisci temporibus iusto at, delectus ut id accusamus illum alias facilis error porro sunt quas in voluptatum optio architecto."
			/>
			<Image
				title="My Dog"
				url="https://images.unsplash.com/photo-1507146426996-ef05306b995a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
				alt="es un perro"
			/>
			<Paragraph
				text="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure laudantium dolor doloribus explicabo reprehenderit commodi dignissimos maiores aliquid quaerat officiis dolore facere facilis, perferendis eius modi ex odit vel tempora in qui unde excepturi quam saepe ut. Unde voluptas iusto illo, amet expedita soluta saepe aspernatur debitis omnis suscipit hic! Dolore quisquam, laudantium dolorum adipisci debitis consequuntur! Et ratione deserunt deleniti, quod minima non sint tenetur! Ea nostrum odit quam aspernatur autem, iste officiis numquam molestias aliquid? Consequuntur dolor ipsum commodi adipisci temporibus iusto at, delectus ut id accusamus illum alias facilis error porro sunt quas in voluptatum optio architecto."
			/>

		</Layout>

	</div>
}

export default index