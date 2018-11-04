import React from "react";
import { Redirect } from 'react-router-dom';
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
		if (this.state.redirect) return <Redirect to={'/'} />;
		return (
			<form className="summary" onSubmit={this.navigateTo}>
				<h3>
					You have answered {this.props.submitted} questions out of{" "}
					{this.props.total}
				</h3>
				<button className="btn btn-big-green btn-giant">Submit</button>
			</form>
		);
	}

}

export default Summary;
