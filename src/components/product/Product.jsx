import React from 'react';
import './product.scss';

const Product = ({ img, link }) => {
	return (
		<div className="product">
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
			<div className="product-desc">
				<div className="product-desc-title">Title</div>
				<div className="product-desc-text"></div>
			</div>
		</div>
	);
};

export default Product;
