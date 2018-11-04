import React from "react";
import Header from "./Header";
import Form from "./Form";
import "../stylesheets/Home.css";

class Home extends React.Component {
	render() {
		const { handleName, handleEmail, token } = this.props;
		return (
			<div>
				<Header />
				<section className="content">
					<Form
						handleName={handleName}
						handleEmail={handleEmail}
						token={token}
					/>
				</section>
			</div>
		);
	}
}

export default Home;
