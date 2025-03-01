import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { React } from "react";
import { useInView } from "react-intersection-observer";
import skillsIamge from "../Assests/skills.svg";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/Skills.less";
import SkillCard from "./SkillCard";

const SkillData = dataJson.Skill;

const Skills = observer(() => {
	const [ref, inView] = useInView();
	return (
		<motion.div
			className="skillsSection"
			ref={ref}
			style={{
				transform: inView ? "none" : "translateX(200px)",
				opacity: inView ? 1 : 0,
				transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
			}}
			id="skill"
		>
			<div className="skillsHeadingblock">
				<div className="skillsImage">
					<img src={skillsIamge} />
				</div>
				<div className="skillsHeading HeadingOfAll">Skills</div>
			</div>

			
			<div className="skills-container">
				{SkillData.map((item) => {
					return (
						<div className="skills-section">
							<label className="skills-section-title">
								{item.type}
							</label>
							{/* <hr/> */}
							<div className="skills-list">
								{item.list.map((skill) => {
									return <SkillCard skill={skill} />;
								})}
							</div>
						</div>
					);
				})}
			</div>
		</motion.div>
	);
});

export default Skills;
