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
<<<<<<< HEAD
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
=======
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
>>>>>>> 690e40967a64feed37e6050c0e2f6bbdaf20416e
			</form>
		);
	}
}

export default Form;