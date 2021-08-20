import Link from 'next/Link'

const LinkNav = ({ children, text, href, tranlate }) => {
	return <li>
		<Link href={href}>
			<a>
				{children}
				<span>{text}</span>
			</a>
		</Link>

		<style jsx>{`

			li {
				margin: 35px 0;
				transform: translateX(${tranlate}px)
			}

			a {
				display: grid;
				grid-template-columns: 25px auto;
				grid-column-gap: 15px;
				align-items: center;				
				color: white;
				text-decoration: none;
			}

			span {
				text-transform: uppercase;
			}

		`}</style>
	</li>
}

export default LinkNav