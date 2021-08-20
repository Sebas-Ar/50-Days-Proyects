const PageWrapper = ({ children, rotateActive }) => {
	return <div className="container">

		{children}

		<style jsx>{`

			.container {
				min-height: 100vh;
				background-color: white;
				transform-origin: 0 0;
				transform: rotate(${rotateActive ? '-20' : '0'}deg);
				transition: transform .5s;
				padding: 100px;
			}

		`}</style>
	</div>
}

export default PageWrapper