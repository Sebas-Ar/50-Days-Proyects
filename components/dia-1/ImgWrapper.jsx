import { useEffect, useState } from "react"
import Img from "./Img"

const ImgWrapper = () => {

	const [childSelected, setChildSelected] = useState(0);
	const [imgList, setImgList] = useState([]);

	useEffect(() => {

		// const response = await axios.get('/api/img')
		// 
		setImgList([
			{
				image: 'https://picsum.photos/400/600',
				title: 'Comida'
			},
			{
				image: 'https://picsum.photos/400/601',
				title: 'Deporte'
			},
			{
				image: 'https://picsum.photos/400/602',
				title: 'Cine'
			},
			{
				image: 'https://picsum.photos/400/603',
				title: 'Algo'
			},
		])
	}, []);

	return <main className="container">

		<div className="center">
			{
				imgList.map(({ image, title }, index) => (
					<Img
						id={index}
						childSelected={childSelected}
						setChildSelected={setChildSelected}
						image={image}
						title={title}
					/>
				))
			}
		</div>

		<style jsx>{`
		
			.container {
				white-space: nowrap;
				display: grid;
				justify-content: center;
				margin: 0 30px;
			}

			.center {
				overflow: auto;
			}

			.center::-webkit-scrollbar {
				width: 5px;
				height: 8px;
				background-color: #aaa;
			}
			
			.center::-webkit-scrollbar-thumb {
				background: #000b;
			}
		
		`}</style>

	</main>
}

export default ImgWrapper