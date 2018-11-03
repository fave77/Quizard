import React from "react";
import "../stylesheets/Option.css";
class Option extends React.Component {
	constructor(props) {
		super(props);
	}
	render() {
		return (
			<div className="option">
				<input type="radio" name="poll" value={this.props.value} />
				<div className="option-val">{this.props.value}</div>
			</div>
		);
	}
}

export default Option;
