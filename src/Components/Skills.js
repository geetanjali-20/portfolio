import { useState, React } from "react";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/Skills.less";
import { observer } from "mobx-react";
import { motion } from "framer-motion";
import SkillCard from "./SkillCard";
import { useInView } from "react-intersection-observer";
import skillsIamge from "../Assests/skills.svg";

const CardComponent = observer(({ data }) => {
	const [isOpen, setIsOpen] = useState(false);
	const skill = data;
	console.log("Skills of", skill.Heading);
	return (
		<motion.div
			className={`card ${isOpen ? "expanded" : "notexpanded"}`}
			onClick={() => setIsOpen(!isOpen)}
			layout
			transition={{
				layout: { duration: 1, type: "spring", restSpeed: 0.5 },
			}}
			style={{
				borderRadius: "1rem",
				boxShadow: "0px 10px 30px rgba(0,0,0,0.5)",
			}}
		>
			<motion.h2
				className={`${
					isOpen ? "expandedHeading" : "notexpandedHeading"
				}`}
			>
				{skill.Heading}
			</motion.h2>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1 }}
					className="expand"
				>
					<div className="skillsDiv">
						{skill.skillsName.map((v, i) => (
							<div className="skillSet">
								{" "}
								<span className="star">⭐ </span>
								{v}
							</div>
						))}
					</div>
					{/* <button>Read more</button> */}
				</motion.div>
			)}
		</motion.div>
	);
});
const SkillData = dataJson.Skill;

const Skills = observer(() => {
	const JsonData = dataJson.Skills;
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
			// whileHover={{
			// 	scale: 1.1,
			// }}
		>
			<div className="skillsHeadingblock">
				<div className="skillsImage">
					<img src={skillsIamge} />
				</div>
				<div className="skillsHeading HeadingOfAll">Skills</div>
			</div>

			{/* <div className="cardsSection">
				{JsonData.map((value, i) => (
					<>
					<CardComponent data={value} key ={i} />
					</>
					
					
				))}
			</div> */}
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
