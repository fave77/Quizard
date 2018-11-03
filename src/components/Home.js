import React from "react";
import "../stylesheets/Home.css";
import Header from "./Header";
import Form from "./Form";
import Question from "./Question";
class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<section class="content">
					<Form />
				</section>
			</div>
		);
	}
}

export default Home;
