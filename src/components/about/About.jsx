import React from 'react';
import './about.scss';
import Paul from '../../images/namsan.jpeg';

const About = () => {
	return (
		<div className="about">
			<div className="about-left">
				<div className="about-card">
					<img className="about-card-img" src={Paul} alt="" />
				</div>
				<div className="about-card-shadow"></div>
			</div>
			<div className="about-right">
				<div className="about-title">
					<h1>ABOUT ME</h1>
				</div>
				<div className="about-desc">
					<p>안녕하세요, 프론트엔드 개발자 전바울 입니다.</p>
					<p>끊임없이 배우며 성장하는 개발자가 되기를 원합니다.</p>
					<p>새로운 도전을 마다하지 않겠습니다.</p>
					<p>혼자서만 돋보이려고 하기보다는</p>
					<p>최고의 팀을 함께 만들어가는</p>
					<p>멋진 팀플레이어가 되도록 노력하겠습니다.</p>
				</div>
			</div>
		</div>
	);
};

export default About;
