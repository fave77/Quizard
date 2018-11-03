import React from "react";
import "../stylesheets/Form.css";
class Form extends React.Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<form action="#" method="post" className="userform">
				<h2>Fill in the form to enter the quiz</h2>
				<fieldset>
					<div className="field">
						<label htmlFor="name" id="name-label">
							Name:
						</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Enter your name"
							required
						/>
					</div>
					<div className="field">
						<label htmlFor="email" id="email-label">
							Email:
						</label>
						<input
							type="email"
							id="email"
							name="email"
							placeholder="Enter your email-id"
							required
						/>
					</div>
				</fieldset>
				<button type="submit" className="btn btn-big-green" id="submit">
					Submit
				</button>
			</form>
		);
	}
}

export default Form;
