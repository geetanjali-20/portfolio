import React from "react";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/About.less";
import logo from "../Assests/CompanyLogo.png";
import { motion} from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
	const [ref, inView] = useInView();
	return (
		<>
			{/* <--   About Section   -->*/}
			<motion.div className="aboutSection"
			initial= {{scale: 1}}
			whileHover={{
				scale: 1.1,
				transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}}>
				<div className="aboutTitle">{dataJson["About"]["Title"]}</div>
				<div className="aboutText">{dataJson["About"]["Text"]}</div>
			</motion.div>

			{/* <--   Work Experience Section   -->*/}
			<motion.div className="workExperience"
			
			initial= {{scale: 1}}
			whileHover={{
				scale: 1.1,
				transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
			}} >
				<div className="firstSection">
					<div className="companyName">
						{dataJson["Experiences"]["Company"]}
					</div>
					<div className="experiences">
						{dataJson["Experiences"]["Items"].map((item, index) => (
							<div key={index}>
								<ul>
									<li>
										<h2 className="role">{item.Role}</h2>
									</li>
								</ul>

								<div className="years">{item.Years}</div>
								<div className="desc">{item.Description}</div>
							</div>
						))}
					</div>
				</div>
				<div className="secondSection">
					<div className="titleExperience">
						{dataJson["Experiences"]["Title"]}
					</div>
					<img src={logo} className="LogoImage" alt="myImage" />
				</div>
			</motion.div>

			{/* <--   Education Section   -->*/}
			<motion.div
				className="EducationSection"
				ref={ref}
				style={{
					transform: inView ? "none" : "translateX(200px)",
					opacity: inView ? 1 : 0,
					transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
				}}
				whileHover={{
					scale: 1.1,
					
				}}
			>
			<div className="firstSection">{dataJson["Education"]["Title"]}</div>
			<div className="secondSection"></div></motion.div>

			{/* <div className="example">
				<div>
					<motion.div
						className="box"
						animate={{ x, y, rotate }}
						transition={{ type: "spring" }}
					/>
				</div>
				<div className="inputs">
					<Input value={x} set={setX}>
						x
					</Input>
					<Input value={y} set={setY}>
						y
					</Input>
					<Input value={rotate} set={setRotate} min={-180} max={180}>
						rotate
					</Input>
				</div>
			</div> */}
		</>
	);
};

export default About;
