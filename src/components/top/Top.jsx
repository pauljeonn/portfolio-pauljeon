import React, { useState, useEffect } from 'react';
import './top.scss';
import { FaArrowUp } from 'react-icons/fa';

const Top = () => {
	const [isVisible, setIsVisible] = useState(false);

	const toggleVisibility = () => {
		console.log(window.pageYOffset);
		if (window.pageYOffset > 300) {
			setIsVisible(true);
		} else {
			setIsVisible(false);
		}
	};

	const moveToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);

		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	return (
		<div className={isVisible ? 'top visible' : 'top'} onClick={moveToTop}>
			<FaArrowUp className="top-icon" />
		</div>
	);
};

export default Top;
