import React from "react";
import "../stylesheets/Home.css";
import Header from "./Header";

class Home extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<section class="content">
					<strong>Edit the Home Page!</strong>
				</section>
			</div>
		);
	}
}

export default Home;
