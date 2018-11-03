import React from 'react';
import { Row, Col } from 'react-materialize';
import Header from './Header';
import Topic from './Topic';
import '../stylesheets/Quiz.css';

class Quiz extends React.Component {

	render() {
		return (
			<div>
				<Header />
				<main className="container section-topic">
					<h4 className="choice animated flash">Choose a Wizardry topic!</h4>
					<Row>
						<Col s={12} m={4} l={4}>
							<Topic name="HTML" />
						</Col>
						<Col s={12} m={4} l={4}>
								<Topic name="CSS" />
						</Col>
						<Col s={12} m={4} l={4}>
								<Topic name="JS" />
						</Col>
					</Row>
				</main>
			</div>
		);
	}

}

export default Quiz;