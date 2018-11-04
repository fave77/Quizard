import React from "react";

class Timer extends React.Component {
	state = {
		mins: 2,
		secs: 1
	};

	updateTimer = async () => {
		if (this.state.secs > 0) {
			await this.setState({
				secs: this.state.secs - 1
			});
			await setTimeout(this.updateTimer, 1000);
		} else if (this.state.mins > 0) {
			await this.setState({
				mins: this.state.mins - 1,
				secs: 59
			});
			await setTimeout(this.updateTimer, 1000);
		} else {
			this.props.timeout();
		}
	};
	componentDidMount = async () => {
		await this.setState({ mins: Math.round(this.props.total / 10) });
		await this.updateTimer();
	};
	left = () => {
		let mins = this.state.mins;
		let secs = this.state.secs;
		if (mins < 10) mins = "0" + mins;
		if (secs < 10) secs = "0" + secs;
		return mins + ":" + secs;
	};
	render() {
		return (
			<div className="countdown">
				<div>Time Left: </div>
				<div className="timer">{this.left()}</div>
			</div>
		);
	}
}

export default Timer;
