const ButtonNav = ({ children, column, row, changeRotate }) => {
	return <button onClick={changeRotate}>

		{children}

		<style jsx>{`

			button {
				border: none;
				background-color: unset;
				grid-column: ${column};
				grid-row: ${row};
				width: 40px;
				height: 40px;
				cursor: pointer;
				color: white;
			}

		`}</style>
	</button>
}

export default ButtonNav