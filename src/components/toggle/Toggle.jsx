import React, { useContext } from 'react';
import './toggle.scss';
import { FaSun } from 'react-icons/fa';
import { FaMoon } from 'react-icons/fa';
import { ThemeContext } from '../../context';

const Toggle = () => {
	const theme = useContext(ThemeContext);

	const handleClick = () => {
		theme.dispatch({ type: 'TOGGLE' });
	};

	return (
		<div
			className="toggle"
			style={{ backgroundColor: theme.state.darkMode ? '#333' : 'white' }}
		>
			<FaSun className="toggle-icon-sun" />
			<FaMoon className="toggle-icon-moon" />
			<div
				className={
					theme.state.darkMode ? 'toggle-button dark' : 'toggle-button'
				}
				onClick={handleClick}
			></div>
		</div>
	);
};

export default Toggle;
