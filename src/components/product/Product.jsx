import React from 'react';
import './product.scss';

const Product = ({
	img,
	link,
	title,
	team,
	desc,
	front,
	back,
	deploy,
	github,
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
						<div className="product-browser-screen">
							<a href={link} target="_blank" rel="noreferrer">
								<img className="product-img" src={img} alt="" />
							</a>
						</div>
					</div>
					{/* <div className="product-pages"></div> */}
				</div>
				<div className="product-right">
					<div className="product-desc">
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> 소개:
							</div>
							<div className="product-item-text">{desc}</div>
						</div>
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> Member:
							</div>
							<div className="product-item-text">{team}</div>
						</div>
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> Front-end:
							</div>
							<div className="product-item-text">{front}</div>
						</div>
						{back && (
							<div className="product-item">
								<div className="product-item-title">
									<span className="bullet">•</span> Back-end:
								</div>
								<div className="product-item-text">{back}</div>
							</div>
						)}
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> Deployment:
							</div>
							<div className="product-item-text">{deploy}</div>
						</div>
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> GitHub:
							</div>
							<div className="product-item-text">
								<a href={github} target="_blank" rel="noreferrer">
									{github}
								</a>
							</div>
						</div>
						<div className="product-item">
							<div className="product-item-title">
								<span className="bullet">•</span> 도메인:
							</div>
							<div className="product-item-text">
								<a href={link} target="_blank" rel="noreferrer">
									{link}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Product;
