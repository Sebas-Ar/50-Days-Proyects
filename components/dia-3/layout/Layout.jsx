import { useEffect, useState } from "react"
import Nav from "./Nav"
import OptionNav from "./OptionNav"
import PageWrapper from "./PageWrapper"


const Layout = ({ children }) => {

	const [rotateActive, setRotateActive] = useState(true)

	useEffect(() => {
		setRotateActive(false)
	}, [])

	return <div className="container">



		<PageWrapper rotateActive={rotateActive}>
			{/* esta es la pagina */}
			{children}
		</PageWrapper>

		<Nav rotateActive={rotateActive} />

		<OptionNav
			rotateActive={rotateActive}
			setRotateActive={setRotateActive}
		/>

		<style jsx>{`

			.container {
				min-height: 100vh;
				background: #333;
				overflow-x: hidden;
			}

		`}</style>
	</div>
}

export default Layout