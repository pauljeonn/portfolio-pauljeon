import React from 'react';
import './contact.scss';
import { VscDeviceMobile } from 'react-icons/vsc';
import { VscMail } from 'react-icons/vsc';
import { VscGithub } from 'react-icons/vsc';

const Contact = () => {
	return (
		<div className="contact" id="contact">
			<a href="#contact" style={{ textDecoration: 'none' }}>
				<div className="contact-title">
					<span className="underscore">&lt; </span>CONTACT
					<span className="underscore"> /&gt;</span>
				</div>
			</a>
			<div className="contact-container">
				<div className="contact-info">
					<div className="contact-item">
						<div className="contact-icon">
							<VscDeviceMobile />
						</div>
						010-7107-9145
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
				<div className="contact-thanks">THANKS FOR VISITING</div>
			</div>
		</div>
	);
};

export default Contact;
