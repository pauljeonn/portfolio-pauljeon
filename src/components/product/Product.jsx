import React from 'react';
import './product.scss';
import { SiGithub } from 'react-icons/si';
import { MdDesktopMac } from 'react-icons/md';

const Product = ({
	img,
	link,
	title,
	team,
	desc,
	tech,
	front,
	back,
	deploy,
	github,
}) => {
	return (
		<div className="product">
			<div className="product-title">{title}</div>
			<div className="product-link-container">
				<a href={github} target="_blank" rel="noreferrer">
					<div className="product-link">
						<div className="product-link-icon">
							<SiGithub />
						</div>
						Github
					</div>
				</a>
				<a href={link} target="_blank" rel="noreferrer">
					<div className="product-link">
						<div className="product-link-icon">
							<MdDesktopMac />
						</div>
						Live Site
					</div>
				</a>
			</div>
			<div className="product-wrapper">
				<div className="product-slide">
					<div className="product-browser">
						{/* <div className="product-browser-bar">
							<div className="product-browser-circle"></div>
							<div className="product-browser-circle"></div>
							<div className="product-browser-circle"></div>
						</div> */}
						<div className="product-browser-screen">
							<a href={link} target="_blank" rel="noreferrer">
								<img className="product-img" src={img} alt="" />
							</a>
						</div>
					</div>
				</div>
				<div className="product-desc">
					<div className="product-text">{desc}</div>
					<div className="product-tech">
						{tech &&
							tech.map((item) => (
								<div className="product-tech-item">{item}</div>
							))}
					</div>
					{/* <div className="product-item">
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
					</div> */}
				</div>
			</div>
		</div>
	);
};

export default Product;
