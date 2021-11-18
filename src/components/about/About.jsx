import React from 'react';
import './about.scss';
import Paul from '../../images/namsan.jpeg';

const About = () => {
	return (
		<div className="about" id="about">
			<div className="about-title">ABOUT ME</div>
			<div className="about-wrapper">
				<div className="about-left">
					<div className="about-card">
						<img className="about-card-img" src={Paul} alt="" />
					</div>
					<div className="about-card-shadow"></div>
				</div>
				<div className="about-right">
					<div className="about-desc">
						<p>안녕하세요. 프론트엔드 개발자 전바울 입니다.</p>
						<p>끊임없이 배우며 성장하는 개발자가 되기를 원합니다.</p>
						<br />
						<p>혼자만의 생각에 갇히지 않고</p>
						<p>팀원들과 소통하며 협업하는</p>
						<p>멋진 팀플레이어가 되도록 노력하겠습니다.</p>
						<br />
						<p>사소한 디테일도 놓치지 않겠습니다.</p>
						<p>새로운 것을 배우는 것이 즐겁습니다.</p>
						<p>도전을 마다하지 않겠습니다.</p>
						<br />
						<p>개발뿐 아니라 UI/UX에도 늘 관심가지고 공부하겠습니다.</p>
					</div>
				</div>
				<div className="about-tech">
					<div className="about-tech-item"></div>
				</div>
			</div>
			<a href="#portfolio">
				<div className="scroll-down">
					<div className="scroll-down-text">프로젝트 둘러보기</div>
				</div>
			</a>
		</div>
	);
};

export default About;
