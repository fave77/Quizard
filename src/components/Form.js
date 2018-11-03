import React from "react";
import { Redirect } from 'react-router-dom';
import "../stylesheets/Form.css";

class Form extends React.Component {
	
	state = {
		redirect: false
	}

	navigateTo = event => {
		event.preventDefault();
		this.setState({
			redirect: true
		});
	}

	render() {
		const { handleName, handleEmail, token } = this.props;
		if (this.state.redirect)
			return <Redirect push to={'/' + token} />;
		return (
			<form className="form animated fadeIn delay-1s" onSubmit={this.navigateTo}>
				<h4>Fill in the form to enter the Quiz</h4>
				<fieldset className="form-field">
					<div className="input-field">
						<label htmlFor="name" className="label">Name</label>
						<input type="text" id="name" name="name" onChange={handleName} required />
					</div>
					<div className="input-field">
						<label htmlFor="email" className="label">Email</label>
						<input type="email" id="email" name="email" onChange={handleEmail} required />
					</div>
				</fieldset>
				<button type="submit" className="btn btn-big-green">Submit</button>
			</form>
		);
	}
}

export default Form;