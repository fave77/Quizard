import React from "react";
import "../stylesheets/Home.css";
import Header from "./Header";
import Form from "./Form";
import Questions from "./Questions";
class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<section className="content">
					<Form />
				</section>
				<Questions />
			</div>
		);
	}
}

export default Home;
