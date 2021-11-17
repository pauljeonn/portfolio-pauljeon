import React from 'react';
import './intro.scss';
import Paul from '../../images/memoji.png';
import { FiChevronDown } from 'react-icons/fi';

const Intro = () => {
	return (
		<div className="intro">
			<div className="intro-left">
				<div className="intro-left-wrapper">
					<h2 className="intro-greeting">Hello, my name is </h2>
					<h1 className="intro-name">Paul Jeon</h1>
					<div className="intro-title">
						<div className="intro-title-wrapper">
							<div className="intro-title-item">Frontend Developer</div>
							<div className="intro-title-item">Web Developer</div>
							<div className="intro-title-item">UI/UX Designer</div>
						</div>
					</div>
					<div className="intro-desc">
						안녕하세요 저는 배움과 성장을 사랑하고 추구하는 개발자 전바울
						입니다.
					</div>
				</div>
			</div>
			<div className="intro-right">
				<div className="intro-bg"></div>
				<img className="intro-img" src={Paul} alt="" />
			</div>
			<a href="#about">
				<div className="scroll-down">
					<div className="scroll-down-text">더 알아보기</div>
					<div className="scroll-down-icon">{/* <FiChevronDown /> */}</div>
				</div>
			</a>
		</div>
	);
};

export default Intro;
