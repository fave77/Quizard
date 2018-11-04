import React from "react";
import { Row, Col } from "react-materialize";
import "../stylesheets/About.css";

class About extends React.Component {
	render() {
		let path = process.env.PUBLIC_URL + "/assets/logo_transparent.png";
		return (
			<section className="background">
				<header className="container">
					<a href="/" title="<- Back">
						<div className="back-btn" />
					</a>
					<img src={path} alt="Quizard Logo" className="about-logo" />
					<h2>About</h2>
				</header>
				<main className="container">
					<p className="about-text">
						Are you cursed with knowledge in general?... well then consider
						becoming a Quiz Wizard! <strong>Quizard</strong> is an online timer
						based <a href="https://reactjs.org/">React</a> application
						implemented using the JAMstack principles where one passing the quiz
						shall win the title of Quizard! This project is part of the{" "}
						<a href="https://hackathon.freecodecamp.org/">
							JAMstack hackathon 2018
						</a>{" "}
						and is made to honor the spirit of open-source contribution!
					</p>
					<hr />
					<h5>Contributors</h5>
					<Row>
						<Col s={12} m={4} l={4}>
							<a
								href="https://github.com/pbiswas101"
								title="GitHub Profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								Priyabrata Biswas
							</a>
						</Col>
						<Col s={12} m={4} l={4}>
							<a
								href="https://github.com/rajatkantinandi"
								title="GitHub Profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								Rajat Kanti Nandi
							</a>
						</Col>
						<Col s={12} m={4} l={4}>
							<a
								href="https://github.com/danielpoehle"
								title="GitHub Profile"
								target="_blank"
								rel="noopener noreferrer"
							>
								Daniel Pöhle
							</a>
						</Col>
					</Row>
				</main>
				<footer>Copyright &copy; 2018. MIT License.</footer>
			</section>
		);
	}
}

export default About;
