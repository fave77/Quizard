import React from "react";

class Header extends React.Component {
	render() {
		return (
			<section
				className="header"
				style={{
					zIndex: 10,
					position: "relative"
				}}
			>
				<h1 className="title">Quizard</h1>
				<small className="tagline">swing your knowledge wand!</small>
			</section>
		);
	}
}

export default Header;
