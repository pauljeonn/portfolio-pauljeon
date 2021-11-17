import React from 'react';
import './footer.scss';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscMail } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

const footer = () => {
	return (
		<div className="footer">
			<div className="footer-quote">
				{/* while (true) &#123; <br />
				&nbsp; &nbsp; &nbsp; &nbsp; learn and code; <br />
				&#125; */}
				"The best preparation for good work tomorrow is to do good work today."{' '}
				<br />- Elbert Hubbard
			</div>
			<div className="footer-wrapper">
				<div className="footer-left">
					<div className="footer-links">
						<a href="#intro">
							<div className="footer-link">PAUL'S PORTFOLIO</div>
						</a>
						<a href="#about">
							<div className="footer-link">ABOUT ME</div>
						</a>
						<a href="#portfolio">
							<div className="footer-link">PROJECTS</div>
						</a>
					</div>
				</div>
				<div className="footer-right">
					<div className="footer-info">
						<div className="footer-item">
							<div className="footer-icon">
								<VscDeviceMobile />
							</div>
							010-7107-914
						</div>
						<div className="footer-item">
							<div className="footer-icon">
								<VscMail />
							</div>
							pauljeonn@gmail.com
						</div>
						<div className="footer-item">
							<div className="footer-icon">
								<VscGithub />
							</div>
							<a
								href="https://github.com/pauljeonn"
								target="_blank"
								rel="noreferrer"
							>
								github.com/pauljeonn
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className="footer-copyright">
				© 2021. Paul Jeon. All rights reserved.
			</div>
		</div>
	);
};

export default footer;
