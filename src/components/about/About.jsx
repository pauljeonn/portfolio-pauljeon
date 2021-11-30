import React, { useContext } from 'react';
import './about.scss';
import Cover from '../../pdfs/coverletter.pdf';
import Kor from '../../pdfs/cv-kor.pdf';
import Eng from '../../pdfs/cv-eng.pdf';
import { ThemeContext } from '../../context';

const About = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="about" id="about">
			<div className="about-bg"></div>
			<div className="about-wrapper">
				<div className="about-title">ABOUT ME</div>
				<div className="about-content">
					<div
						className="about-desc"
						style={{
							backgroundColor: darkMode ? '#222' : 'white',
							color: darkMode && 'white',
						}}
					>
						<p>저는 이런 프론트엔드 개발자가 되고 싶습니다:</p>
						<div className="about-decision">
							<p>
								1. 늘 더 좋은 <b>사용자경험</b>을 위해 고민하며 사소한 디테일도
								놓치지않는 개발자
							</p>
							<hr />
							<p>
								2. 원활한 소통과 협업을 우선시하는 <b>팀플레이어</b>
							</p>
							<hr />
							<p>
								3. 빠르게 변화하는 프론트엔드 환경에서{' '}
								<b>주도적으로 학습하고 성장</b>
								하는 개발자
							</p>
						</div>
						<br />
						<br />
						<p>
							혹시 저에 대해 더 자세히 알고싶으시다면 아래 링크를 클릭해주시길
							바랍니다:
						</p>
						<div className="about-button-container">
							<a href={Cover} target="_blank" rel="noopener noreferrer">
								<button className="about-button">자기소개서</button>
							</a>
							<a href={Kor} target="_blank" rel="noopener noreferrer">
								<button className="about-button">이력서</button>
							</a>
							{/* <a href={Eng} target="_blank" rel="noopener noreferrer">
								<button className="about-button">이력서(영문)</button>
							</a> */}
						</div>
					</div>
				</div>
				<div className="about-tech"></div>
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
