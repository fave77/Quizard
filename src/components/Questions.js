import React from "react";
import Question from "./Question";
import "../stylesheets/Questions.css";
import Summary from "./Summary";
import Header from "./Header";
class Questions extends React.Component {
	constructor(props) {
		super(props);
		this.state = { questions: [], index: 0, loading: true, count: 0 };
	}
	toSubmit = async (id, value) => {
		let qs = this.state.questions;
		qs[this.state.index].selected = value;
		await this.setState({
			questions: qs,
			count: this.state.count + 1
		});
		await setTimeout(() => {
			let index = this.state.index + 1;
			this.setState({ index: index });
		}, 500);
	};
	componentDidMount = async () => {
		const response = await fetch(
			"https://raw.githubusercontent.com/danielpoehle/Quizard/master/data/questions.json"
		);
		const qs = await response.json();
		console.log(qs);
		this.setState({ questions: qs.questions, loading: false });
	};
	render() {
		const question = this.state.questions[this.state.index];
		if (this.state.loading)
			return (
				<div>
					<Header />
					<h1>Loading questions..</h1>.
				</div>
			);
		else if (this.state.index < this.state.questions.length)
			return (
				<div>
					<Header />
					<Question
						id={question.id}
						key={question.id}
						question={question.question}
						options={question.options}
						toSubmit={this.toSubmit}
					/>
				</div>
			);
		else
			return (
				<div>
					<Header />
					<Summary submitted={this.state.count} />
				</div>
			);
	}
}

export default Questions;
