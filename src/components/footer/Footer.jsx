import React from 'react';
import './footer.scss';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscMail } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

const footer = () => {
	return (
		<div className="footer">
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
	);
};

export default footer;
