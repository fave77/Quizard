import React from "react";
import { Row, Col } from "react-materialize";
import Header from "./Header";
import Topic from "./Topic";
import "../stylesheets/Quiz.css";
import { Redirect } from "react-router-dom";
class Quiz extends React.Component {
	state = {
		redirect: false
	};
	toQuestion = topic => {
		this.setState({ redirect: true });
	};
	render() {
		if (this.state.redirect)
			return (
				<Redirect push to={"/questions/" + this.props.match.params.token} />
			);
		return (
			<div>
				<Header />
				<main className="container section-topic">
					<h4 className="choice animated flash">Choose a Wizardry topic!</h4>
					<Row>
						<Col s={12} m={4} l={4}>
							<Topic name="HTML" toQuestion={this.toQuestion} />
						</Col>
						<Col s={12} m={4} l={4}>
							<Topic name="CSS" toQuestion={this.toQuestion} />
						</Col>
						<Col s={12} m={4} l={4}>
							<Topic name="JS" toQuestion={this.toQuestion} />
						</Col>
					</Row>
				</main>
			</div>
		);
	}
}

export default Quiz;
