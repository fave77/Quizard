import React from "react";
import Option from "./Option";
import "../stylesheets/Question.css";

class Question extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			question: this.props.question,
			options: this.props.options
		};
	}
	componentWillMount() {
		this.setState({
			question: this.props.question,
			options: this.state.options
		});
	}
	render() {
		const options = this.state.options.map((option, idx) => {
			return <Option value={option} id={idx} />;
		});
		return (
			<div className="question">
				<h3>{this.state.question}</h3>
				{options}
			</div>
		);
	}
}

export default Question;
