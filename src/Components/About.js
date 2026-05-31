import React from "react";
import purify from "dompurify";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/About.less";
import logo from "../Assests/CompanyLogo.png";
import runnlogo from "../Assests/runntv.jpg";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import VerticalLinearStepper from "./Stepper";

const About = () => {
	const [ref, inView] = useInView();
	return (
		<>
			<div className="workExperience" id="work">
				<div className="titleExperience HeadingOfAll">
					{dataJson["Experiences"]["Title"]}
				</div>
				<div className="experiences">
					{dataJson["Experiences"]["Items"].map((item, index) => (
						<div className="experience">
							<div key={index} className="firstSection">

								<div className="sec"><h2 className="role">{item.Role}</h2><div className="years">{item.Years}</div></div>
								<div className="company">{item.Company}</div>

								<div className="desc" dangerouslySetInnerHTML={{ __html: purify.sanitize(item.Description) }}></div>
							</div>
							<div className="secondSection">
								<img src={index === 0 ? runnlogo : logo} className={`LogoImage ${index === 0 ? "runnlogo" : "logo"}`} alt="myImage" />
							</div>
						</div>
					))}
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
