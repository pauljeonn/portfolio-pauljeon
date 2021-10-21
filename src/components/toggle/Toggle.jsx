import React from 'react';
import './toggle.scss';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';

const Toggle = () => {
	return (
		<div className="toggle">
			<FaSun />
			<FaMoon />
			<div className="toggle-button"></div>
		</div>
	);
};

export default Toggle;
