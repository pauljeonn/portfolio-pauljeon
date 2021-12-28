import React from 'react';
import './portfolio.scss';
import Product from '../product/Product';
import { products } from '../../data';

const Portfolio = () => {
	return (
		<div>
			<div className="portfolio" id="portfolio">
				<div className="portfolio-outer">
					<div className="portfolio-inner">
						<a href="#portfolio" style={{ textDecoration: 'none' }}>
							<div className="portfolio-title">
								<span className="underscore">&lt; </span>PROJECTS
								<span className="underscore"> /&gt;</span>
							</div>
						</a>
						<div className="portfolio-list">
							{products.map((item) => (
								<Product
									key={item.id}
									img={item.img}
									link={item.link}
									title={item.title}
									team={item.team}
									desc={item.desc}
									tech={item.tech}
									front={item.front}
									back={item.back}
									deploy={item.deploy}
									github={item.github}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
