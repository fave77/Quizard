import React from "react";
import "../stylesheets/Option.css";
class Option extends React.Component {
	selected = () => {
		this.props.selected(this.props.value);
	};
	render() {
		return (
			<div className="option">
				<input
					type="radio"
					name="poll"
					value={this.props.value}
					onClick={this.selected}
				/>
				<div className="option-val">{this.props.value}</div>
			</div>
		);
	}
}

export default Option;
