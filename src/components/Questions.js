import React from "react";
import Question from "./Question";
import "../stylesheets/Questions.css";
import Summary from "./Summary";
import Header from "./Header";
import Timer from "./Timer";

class Questions extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			questions: [],
			index: 0,
			loading: true,
			count: 0,
			attempted: 0
		};
	}
	toSubmit = async (id, value, isCorrect) => {
		let qs = this.state.questions;
		qs[this.state.index].selected = value;
		if (isCorrect) {
			await this.setState({
				questions: qs,
				count: this.state.count + 1
			});
		}
		await setTimeout(() => {
			let index = this.state.index + 1;
			this.setState({ index: index, attempted: this.state.attempted + 1 });
		}, 300);
	};
	skip = () => {
		let index = this.state.index + 1;
		this.setState({ index: index });
	};
	timeout = () => {
		this.setState({ index: this.state.questions.length });
	};
	componentDidMount = async () => {
		const path = process.env.PUBLIC_URL;
		const urls = {
			HTML: `${path}/data/questions_html.json`,
			CSS: `${path}/data/questions_css.json`,
			JS: `${path}/data/questions_js.json`
		};
		const response = await fetch(urls[this.props.match.params.topic]);
		if (response.ok) {
			const qs = await response.json();
			const questions = qs.questions;
			while (questions.length > 20) {
				questions.splice(Math.floor(Math.random() * questions.length), 1);
			}
			this.setState({ questions: questions, loading: false });
		} else alert("No questions found");
	};
	render() {
		const question = this.state.questions[this.state.index];
		if (this.state.loading)
			return (
				<div>
					<Header />
					<div className="loader">
						<div className="preloader" />
						<h1>Loading questions..</h1>
					</div>
				</div>
			);
		else if (this.state.index < this.state.questions.length)
			return (
				<div>
					<Header />
					<div className="questions">
						<Timer timeout={this.timeout} total={this.state.questions.length} />
						<Question
							id={question.id}
							key={question.id}
							question={question.question}
							options={question.options}
							ans={question.ans}
							toSubmit={this.toSubmit}
							skip={this.skip}
						/>
					</div>
				</div>
			);
		else
			return (
				<div>
					<Header />
					<Summary
						correct={this.state.count}
						total={this.state.questions.length}
						attempted={this.state.attempted}
					/>
				</div>
			);
	}
}

export default Questions;
