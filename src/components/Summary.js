import React from "react";
import "../stylesheets/Questions.css";
class Summary extends React.Component {
	render() {
		return (
			<form action={null} className="summary">
				<h3>You have answered {this.props.submitted} questions</h3>
				<button className="btn btn-big-green btn-giant">Submit</button>
			</form>
		);
	}
}

export default Summary;
