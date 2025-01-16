import React from "react";
import "../Styles/Footer.less";
import LinkedIn from "../Assests/LinkedIn.png";
import Mail from "../Assests/email.png";
import Linktree from "../Assests/link.png";
import Github from "../Assests/github.png";
// import Code from "../Assests/code.png";
import dataJson from "../Configs/JSON/Content.json";
const Footer = () => {
	const JsonData = dataJson.Footer.Socials;
	const data = [LinkedIn, Mail, Github, Linktree];
	return (
		<footer class="main-footer">
			<div class="main-container">
				<div class="main-footer__upper">
					<div class="main-footer__row main-footer__row-1">
						<h2 class="heading heading-sm main-footer__heading-sm">
							<span>Social Media Handles</span>
						</h2>
						<div class="main-footer__social-cont">
							{JsonData.map((value, index) => (
								<a target="_blank" rel="noreferrer" href={value.link}>
									<img class="main-footer__icon" src={data[index]} alt={value.alt} />
								</a>
							))}
						</div>
					</div>
					<div class="main-footer__row main-footer__row-2">
						{/* <h2 class="heading heading-sm text-lt">Geetanjali Sharma</h2> */}
						<p class="main-footer__short-desc">
							I love collaborating on projects that challenge me to innovate, and I’m always eager to
							bring fresh, user-friendly solutions to the table. Curious about what we can create together?<br/> Let’s connect and make something amazing happen! 🚀
						</p>
					</div>
				</div>
				<div class="main-footer__lower">
					© Copyright
					<script>document.write(new Date().getFullYear());</script>2024 . Made by&nbsp;
					<a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/geetanjali-sharma/01">
						Geetanjali Sharma
					</a>
					💜
				</div>
			</div>
		</footer>
	);
};

export default Footer;
