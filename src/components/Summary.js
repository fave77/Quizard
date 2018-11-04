import React from "react";
import { Redirect } from "react-router-dom";
import "../stylesheets/Questions.css";

class Summary extends React.Component {
	state = {
		redirect: false
	};

	navigateTo = event => {
		event.preventDefault();
		this.setState({
			redirect: true
		});
	};

	render() {
		if (this.state.redirect) return <Redirect to={"/"} />;
		return (
			<form className="summary" onSubmit={this.navigateTo}>
				<h6>
					You have given {this.props.correct} correct and&nbsp;
					{this.props.attempted - this.props.correct} wrong answers out of&nbsp;
					{this.props.total} questions.
				</h6>
				<h5>
					Your Score is: &nbsp;
					{(
						this.props.correct -
						(this.props.attempted - this.props.correct) * 0.33
					).toFixed(2)}
					/{this.props.total}
				</h5>
				<button className="btn btn-big-green btn-giant">Submit</button>
			</form>
		);
	}
}

export default Summary;
