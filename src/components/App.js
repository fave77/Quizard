import React from "react";
import { Route } from "react-router-dom";
import Home from "./Home";
import Quiz from "./Quiz";
import "../stylesheets/App.css";
import "../stylesheets/animate.css";
import Questions from "./Questions";

class App extends React.Component {
	state = {
		token: "",
		name: "",
		email: ""
	};

	componentWillMount() {
		this.setState({
			token: Math.random()
				.toString(36)
				.substr(-8)
		});
	}

	handleName = event => {
		let name = event.target.value;
		this.setState({
			name: name
		});
	};

	handleEmail = event => {
		let email = event.target.value;
		this.setState({
			email: email
		});
	};

	render() {
		return (
			<div>
				<Route
					exact
					path="/"
					render={() => (
						<Home
							token={this.state.token}
							handleName={this.handleName}
							handleEmail={this.handleEmail}
						/>
					)}
				/>
				<Route exact path={"/topic/:token"} component={Quiz} />
				<Route
					exact
					path={"/questions/" + this.state.token}
					component={Questions}
				/>
			</div>
		);
	}
}

export default App;
