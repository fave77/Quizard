import React from 'react';
import { CardPanel } from 'react-materialize';
import '../stylesheets/Quiz.css';

class Topic extends React.Component {

	render() {
		return (
			<CardPanel className="topics tooltipped animated fadeInUp" data-position="bottom" data-tooltip={this.props.name}>
				<section className={`${this.props.name.toLowerCase()}`}></section>
			</CardPanel>
		);
	}

}

export default Topic;