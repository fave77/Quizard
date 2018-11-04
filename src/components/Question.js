import React from "react";
import Option from "./Option";
import "../stylesheets/Question.css";

class Question extends React.Component {
	selected = value => {
		let ans = this.props.options[
			parseInt(this.props.ans, 2) / this.props.id - 1
		];
		this.props.toSubmit(this.props.id, value, ans === value);
	};
	render() {
		const options = this.props.options.map((option, idx) => {
			return (
				<Option value={option} id={idx} key={idx} selected={this.selected} />
			);
		});
		return (
			<div className="question animated slideInDown">
				<h4>{this.props.question}</h4>
				<form action={null}>{options}</form>
				<div>
					<button className="btn btn-big-blue" onClick={this.props.skip}>
						Skip
					</button>
				</div>
			</div>
		);
	}
}

export default Question;
