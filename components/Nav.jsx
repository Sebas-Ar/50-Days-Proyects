import Link from 'next/Link'

const Nav = () => {

	return (

		<nav className="container">
			<ul>
				{
					Array(9).fill(0).map((_, index) => (
						<li>
							<Link href={`/projects/dia-${index + 1}`}>
								<a target="_blank" rel="noopener noreferrer">Dia {index + 1}</a>
							</Link>
						</li>
					))
				}
			</ul>
		</nav>
	)
}

export default Nav