import React from "react";
import { SideNav, SideNavItem, Button } from 'react-materialize';
import { Link } from 'react-router-dom';

class Header extends React.Component {

	render() {
		let path = process.env.PUBLIC_URL + '/assets/logo_transparent.png';
		return (
			<section className="header" style={{ zIndex: 10, position: "relative" }}>
				<img src={path} alt="Quizard Logo" className="logo" />
				<ul className="nav-bar">
					<li><Link to="/about">About</Link></li>
					<li><a href="https://github.com/pbiswas101/Quizard">Contribute</a></li>
        </ul>
			</section>
		);
	}

}

export default Header;
