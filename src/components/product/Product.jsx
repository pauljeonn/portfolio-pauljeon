import React from 'react';
import './product.scss';

const Product = ({
	img,
	link,
	title,
	team,
	desc,
	stack,
	deploy,
	github,
	domain,
}) => {
	return (
		<div className="product">
			<div className="product-title">{title}</div>
			{/* <div className="product-title-underline"></div> */}
			<div className="product-wrapper">
				<div className="product-left">
					<div className="product-browser">
						<div className="product-browser-bar">
							<div className="product-browser-circle"></div>
							<div className="product-browser-circle"></div>
							<div className="product-browser-circle"></div>
						</div>
						<a href={link} target="_blank" rel="noreferrer">
							<img className="product-img" src={img} alt="" />
						</a>
					</div>
					<div className="product-pages">{`< 1/5 >`}</div>
				</div>
				<div className="product-right">
					<div className="product-desc">
						<div className="product-item">
							{' '}
							<span className="bullet">•</span> {team}
						</div>
						<div className="product-item">
							<span className="bullet">•</span> 소개: {desc}
						</div>
						<div className="product-item">
							<span className="bullet">•</span> 사용 스택: {stack}
						</div>
						<div className="product-item">
							<span className="bullet">•</span> Deployment: {deploy}
						</div>
						<div className="product-item">
							<span className="bullet">•</span> GitHub: {github}
						</div>
						<div className="product-item">
							<span className="bullet">•</span> 도메인: {domain}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
