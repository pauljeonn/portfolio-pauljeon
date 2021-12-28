import React, { useContext } from 'react';
import './about.scss';
import { ThemeContext } from '../../context';
import { SiHtml5 } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiTypescript } from 'react-icons/si';
import { SiReact } from 'react-icons/si';
import { FaVuejs } from 'react-icons/fa';
import { FaSass } from 'react-icons/fa';
import { SiStyledcomponents } from 'react-icons/si';
import { SiGit } from 'react-icons/si';
import { SiFirebase } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiFigma } from 'react-icons/si';
import { SiAdobexd } from 'react-icons/si';

const About = () => {
	const theme = useContext(ThemeContext);
	const darkMode = theme.state.darkMode;

	return (
		<div className="about" id="about">
			<div className="about-outer">
				<div className="about-inner">
					<a href="#about" style={{ textDecoration: 'none' }}>
						<div className="about-title">
							<span className="underscore">&lt; </span>ABOUT ME
							<span className="underscore"> /&gt;</span>
						</div>
					</a>
					<div className="about-part">
						<h1>WHO AM I</h1>
						<p>안녕하세요. 주니어 프론트엔드 개발자 전바울 입니다.</p>
						<br />
						<p>
							저는 이전 회사에서 SAP 분야로 일을 시작하였지만 사내 웹프로젝트
							task force에 선출되어 프론트엔드 업무를 6개월 간 진행하는
							과정속에서 프론트엔드에 대한 적성과 열정을 발견했습니다.
						</p>
						<p>
							진로에 대한 깊은 고민 후 결국 프론트엔드 개발자가 되기로 결심하고
							준비를 시작하였습니다.
						</p>
						<p>
							진지하게 내린 결정인만큼 앞으로 영향력있는 개발자로 성장하고자
							한걸음씩 걸어나가고 있습니다.
						</p>
						<br />
						<p>
							코드 한 줄을 작성하더라도 더 효율적인 방법은 없는지 늘
							고민하겠습니다.
						</p>
						<p>
							즐거운 사용자경험을 늘 염두에 두고 좋은 UI/UX를 고민하며
							개발하겠습니다.
						</p>
						<p>
							명확하고 원활하게 소통하며 협업을 잘하는 팀플레이어가 되겠습니다.
						</p>
						<p>
							문제의 본질을 파악하며 비즈니스 가치 창출에 기여하는 개발자로
							성장하겠습니다.
						</p>
					</div>
					<div className="about-part two">
						<h1>SKILLS</h1>

						<div className="about-icon-container">
							<div className="about-icon">
								<SiHtml5 />
							</div>
							<div className="about-icon">
								<SiCss3 />
							</div>
							<div className="about-icon">
								<SiJavascript />
							</div>
							<div className="about-icon">
								<SiTypescript />
							</div>
							<div className="about-icon">
								<SiReact />
							</div>
							<div className="about-icon">
								<FaVuejs />
							</div>
							<div className="about-icon">
								<FaSass />
							</div>
							<div className="about-icon">
								<SiStyledcomponents />
							</div>
							<div className="about-icon">
								<SiGit />
							</div>
							<div className="about-icon">
								<SiFirebase />
							</div>
							<div className="about-icon">
								<SiMongodb />
							</div>
							<div className="about-icon">
								<SiFigma />
							</div>
							<div className="about-icon">
								<SiAdobexd />
							</div>
						</div>
						<p>저는 이런것들을 할 수 있습니다:</p>
						<ul>
							<li>
								React 프레임워크를 주력으로 사용하며 함수형 컴포넌트와 hooks의
								개념을 이해하고 적용합니다.
							</li>
							<li>
								타입스크립트 기반 리액트 개발이 가능합니다. 데이터 인터페이스를
								정의하고 목적에 맞게 사용합니다.
							</li>
							<li>Next.js 개발이 가능하며 SSR/SPA의 장단점을 이해합니다.</li>
							<li>
								ES5, ES6 문법의 차이점을 인지하고있으며 더 깊은 자바스크립트
								지식을 쌓기 위해 노력합니다.
							</li>
							<li>Jest를 사용하여 Unit Test를 진행합니다.</li>
							<li>
								Node.js, Firebase, MongoDB 등을 사용하여 간단한 백엔드 작업 및
								RESTful API 구현을 할 수 있습니다.
							</li>
							<li>
								Sass, styled-components, Emotion 등을 사용하여 아름답고 효율적인
								스타일링을 추구합니다.
							</li>
							<li>
								Figma, Adobe XD 같은 디자인툴을 활용하여 UI 디자인,
								와이어프레임, 프로토타이핑 작업을 할 수 있습니다.
							</li>
							<li>
								해외 10년 거주경험을 통해 영문 개발문서를 접하고 이해하는데
								언어적으로 어려움이 없습니다.
							</li>
							<li>
								언더 엔지니어링 및 오버 엔지니어링 개념에 대해 이해하고
								있습니다.
							</li>
						</ul>
						<br />
						<p>
							아직 배울 것이 많은 주니어 개발자입니다. 항상 겸손하고 적극적인
							자세를 잃지 않겠습니다.
						</p>
						<p>
							어제보다 오늘 더 훌륭한 개발자가 되기 위하여 빠르게 그리고 바르게
							성장하는 개발자가 되겠습니다.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
