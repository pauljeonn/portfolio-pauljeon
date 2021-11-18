import React from 'react';
import './portfolio.scss';
import Product from '../product/Product';
import { products } from '../../data';

const Portfolio = () => {
	return (
		<div>
			<div className="portfolio" id="portfolio">
				<div className="portfolio-title">PROJECTS</div>
				<div className="portfolio-list">
					{products.map((item) => (
						<Product
							key={item.id}
							img={item.img}
							link={item.link}
							title={item.title}
							team={item.team}
							desc={item.desc}
							front={item.front}
							back={item.back}
							deploy={item.deploy}
							github={item.github}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
