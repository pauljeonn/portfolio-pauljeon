import React from 'react';
import Particle from '../particle/Particle';
import './intro.scss';

const Intro = () => {
	return (
		<div className="intro" id="intro">
			<div className="intro-outer">
				{/* <Particle className="particle" /> */}
				<div className="intro-inner">
					{/* <Particle className="particle" /> */}
					<div className="intro-bar">
						<div className="intro-circle"></div>
						<div className="intro-circle"></div>
						<div className="intro-circle"></div>
					</div>
					<h1 className="intro-name">Paul Jeon</h1>
					<div className="intro-title">
						<div className="intro-title-wrapper">
							<div className="intro-title-item">Frontend Developer</div>
							<div className="intro-title-item">Web Developer</div>
							<div className="intro-title-item">UI/UX Enthusiast</div>
						</div>
					</div>
					<div className="intro-desc">
						<p>안녕하세요.</p>
						<p>프론트엔드 개발자 전바울 입니다.</p>
					</div>
					<a className="scroll-down-link" href="#about">
						<div className="scroll-down">
							<p>더 알아보기</p>
						</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Intro;
