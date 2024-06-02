import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import "../Styles/Contact.less";
import Letter from "../Assests/letter.svg";
const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_8x62bqo", "template_6fuaqcw", form.current, {
				publicKey: "3nyMUK1C74Lt-MFR1",
			})
			.then(
				() => {
					alert("SUCCESS!");
				},
				(error) => {
					alert("FAILED...", error.text);
				}
			);
	};

	return (
		<>
			<div className="ContactSection" id="contact">
				<div className="Firstsection">
					<div className="contactHeading">Contact</div>
					{/* <div className="subHeading">
						Get in touch, just drop a message...
					</div> */}

					<img src={Letter} alt="letter" className="letterImg" />
				</div>

				<div className="contactForm">
                <div className="subHeading">
						Get in touch, just drop a message...
					</div>
					<form ref={form} onSubmit={sendEmail}>
						<div className="fields">
							<label className="Labels">Name</label>
							<input type="text" name="from_name" placeholder="Enter your Name" />
						</div>
						<div className="fields">
							<label className="Labels">Email</label>
							<input type="email" name="from_email" placeholder="Enter your Email ID"/>
						</div>
						<div className="fields">
							<label className="Labels">Message</label>
							<textarea name="message" placeholder="Message..."/>
						</div>
						<div className="sendButton">
                        <input
							type="submit"
							value="Send"
							className="submitButton"
						/>
                        </div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ContactUs;
