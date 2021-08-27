import QuestionResponse from "../../components/dia-12/QuestionResponse"

const index = () => {
	return <div className="container">

		<h1>Frequently Asked Questions</h1>
		<ul>
			<QuestionResponse
				question="Why shouldn't we trust atoms?"
				response="They make up everything"
			/>
			<QuestionResponse
				question="What do you call someone with no body and no nose?"
				response="Nobody knows."
			/>
			<QuestionResponse
				question="What's the object-oriented way to become wealthy?"
				response="Nobody knows."
			/>
			<QuestionResponse
				question="What is: 1 + 1?"
				response="Depends on who are you asking."
			/>
		</ul>

		<style jsx>{`

			.container {
				min-height: 100vh;
				background-color: #eee;
			}

			h1 {
				text-align: center;
				font-size: 2rem;
				padding: 3rem 0;
				font-weight: 400;
			}

			ul {
				display: grid;
				grid-row-gap: 1.5rem;
				margin: 0 3rem;
			}

		`}</style>
	</div>
}

export default index