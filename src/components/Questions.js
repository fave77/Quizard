import React from "react";
import Question from "./Question";
import "../stylesheets/Questions.css";
class Questions extends React.Component {
	constructor(props) {
		super(props);
		this.state = { questions: [] };
	}
	toSubmit = (id, value) => {
		let qs = this.state.questions;
		let idx = qs.indexOf(qs.filter(q => q.id === id)[0]);
		qs[idx].selected = value;
		this.setState({ questions: qs });
	};
	componentDidMount = async () => {
		const response = await fetch(
			"https://raw.githubusercontent.com/danielpoehle/Quizard/master/data/questions.json"
		);
		const qs = await response.json();
		console.log(qs);
		this.setState({ questions: qs.questions });
	};
	render() {
		const questions = this.state.questions.map((question, idx) => {
			return (
				<Question
					id={question.id}
					key={question.id}
					question={question.question}
					options={question.options}
					toSubmit={this.toSubmit}
				/>
			);
		});
		return (
			<div className="questions">
				{questions}
				<button className="btn btn-big-green btn-giant">Submit</button>
			</div>
		);
	}
}

export default Questions;
