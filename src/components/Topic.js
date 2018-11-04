import React from "react";
import { CardPanel } from "react-materialize";
import "../stylesheets/Quiz.css";

class Topic extends React.Component {
	render() {
		return (
			<CardPanel
				className="topics animated fadeInUp tooltipped"
				data-position="bottom"
				data-tooltip={this.props.name}
				title={this.props.name}
				onClick={() => this.props.toQuestion(this.props.name)}
			>
				<section className={`${this.props.name.toLowerCase()}`} />
			</CardPanel>
		);
	}
}

export default Topic;
