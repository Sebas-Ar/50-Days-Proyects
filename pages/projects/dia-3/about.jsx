import Paragraph from "../../../components/dia-3/articles/Paragraph"
import Title from "../../../components/dia-3/articles/Title"
import Layout from "../../../components/dia-3/layout/Layout"
import Head from 'next/head'

const about = () => {
	return <div>

		<Head>
			<title>Dia 5 - About</title>
		</Head>

		<Layout>
			<Title title="Sebas Arias" author="" />
			<Paragraph
				text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio porro quis exercitationem unde beatae doloribus. Numquam nihil, asperiores optio nostrum dolorum voluptatem consequuntur itaque sit illo sequi corrupti commodi, at unde qui. Error dolores animi dolore illum! A dolorem eum incidunt modi. Vero quibusdam eligendi eaque. Doloremque vero officiis expedita!"
			/>
			<Paragraph
				text="Lorem ipsum dolor sit amet consectetur adipisicing elit. A praesentium error nobis architecto provident vero numquam officia consequatur ratione laborum odit culpa perferendis cumque, atque saepe molestiae quas velit. Architecto beatae aperiam quos quasi deleniti quidem illo, quam quaerat molestias? Eligendi, consequatur rem distinctio nobis recusandae fugit nam nemo? Quae perspiciatis, itaque tenetur sequi ea consequuntur nesciunt voluptas, possimus unde facere at doloremque atque exercitationem. Illo, esse quam id perspiciatis labore vitae eos similique sunt magni quisquam incidunt possimus natus necessitatibus quas exercitationem. Perspiciatis natus molestiae libero quae, doloribus repudiandae rem, suscipit aut est quis fugiat adipisci ad provident iste."
			/>

		</Layout>

	</div>
}

export default about