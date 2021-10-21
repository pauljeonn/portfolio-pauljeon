import React from 'react';
import './portfolio.scss';
import Product from '../product/Product';

const Portfolio = () => {
	return (
		<div>
			<div className="portfolio">
				<div className="portfolio-text">
					<h1 className="portfolio-title">Portfolio</h1>
					<p className="portfolio-desc"></p>
				</div>
				<div className="portfolio-list">
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
					<Product />
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
