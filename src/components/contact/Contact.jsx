import React from 'react';
import './contact.scss';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscMail } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

const Contact = () => {
	return (
		<div className="contact">
			<div className="contact-title">CONTACT</div>
			<div className="contact-bg">
				<div className="contact-info">
					<div className="contact-item">
						<div className="contact-icon">
							<VscDeviceMobile />
						</div>
						010-7107-914
					</div>
					<div className="contact-item">
						<div className="contact-icon">
							<VscMail />
						</div>
						pauljeonn@gmail.com
					</div>
					<div className="contact-item">
						<div className="contact-icon">
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
	);
};

export default Contact;
