import React from "react";
import purify from "dompurify";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/About.less";
import logo from "../Assests/CompanyLogo.png";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VerticalLinearStepper from "./Stepper";

const About = () => {
	const [ref, inView] = useInView();
	return (
		<>
			<div className="workExperience" id="work">
				<div className="firstSection">
					{/* <div className="companyName">
						{dataJson["Experiences"]["Company"]}
					</div> */}
					<div className="experiences">
						{dataJson["Experiences"]["Items"].map((item, index) => (
							<div key={index}>
								<ul>
									<li>
										<h2 className="role">{item.Role}</h2>
									</li>
								</ul>

								<div className="years">{item.Years}</div>
								<div className="desc" dangerouslySetInnerHTML={{__html:purify.sanitize(item.Description)}}></div>
							</div>
						))}
					</div>
				</div>
				<div className="secondSection">
					<div className="titleExperience HeadingOfAll">
						{dataJson["Experiences"]["Title"]}
					</div>
					<img src={logo} className="LogoImage" alt="myImage" />
				</div>
			</div>

			{/* <--   Education Section   -->*/}
			<motion.div
				className="EducationSection"
				ref={ref}
				id="education"
				style={{
					transform: inView ? "none" : "translateX(-200px)",
					opacity: inView ? 1 : 0,
					transition:
						"all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
			>
				<div className="firstSection HeadingOfAll">
					{dataJson["Education"]["Title"]}
				</div>
				<div className="secondSection">
					<VerticalLinearStepper />
				</div>
			</motion.div>
		</>
	);
};

export default About;
