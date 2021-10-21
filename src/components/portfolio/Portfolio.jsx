import React from 'react';
import './portfolio.scss';
import Product from '../product/Product';
import { products } from '../../data';

const Portfolio = () => {
	return (
		<div>
			<div className="portfolio">
				<div className="portfolio-text">
					<h1 className="portfolio-title">Portfolio</h1>
					<p className="portfolio-desc"></p>
				</div>
				<div className="portfolio-list">
					{products.map((item) => (
						<Product key={item.id} img={item.img} link={item.link} />
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
