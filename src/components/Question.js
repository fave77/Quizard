import React from "react";
import Option from "./Option";
import "../stylesheets/Question.css";

class Question extends React.Component {
	constructor(props) {
		super(props);
	}
	selected = value => {
		this.props.toSubmit(this.props.id, value);
	};
	render() {
		const options = this.props.options.map((option, idx) => {
			return (
				<Option value={option} id={idx} key={idx} selected={this.selected} />
			);
		});
		return (
			<form action={null} className="question">
				<h3>{this.props.question}</h3>
				{options}
			</form>
		);
	}
}

export default Question;
