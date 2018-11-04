import React from "react";

class Header extends React.Component {
	render() {
		let path = process.env.PUBLIC_URL + '/assets/logo_transparent.png';
		return (
			<section className="header" style={{ zIndex: 10, position: "relative" }}>
				<img src={path} alt="Quizard Logo" className="logo" />
			</section>
		);
	}
}

export default Header;
