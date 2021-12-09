import React from 'react';
import './navbar.scss';

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-item-container">
				<div className="navbar-item">Home</div>
				<div className="navbar-item">About</div>
				<div className="navbar-item">Projects</div>
				<div className="navbar-item">Contact</div>
			</div>
		</div>
	);
};

export default Navbar;
