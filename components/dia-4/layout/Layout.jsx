const Layout = ({ children }) => {
	return <div className="container">

		{children}

		<style jsx>{`

			.container {
				background: rgb(79,74,171);
				background: linear-gradient(180deg, rgba(79,74,171,1) 0%, rgba(118,11,151,1) 100%);
				height: 100vh;
				display: grid;
				justify-content: center;
				align-items: center;
			}

		`}</style>
	</div>
}

export default Layout