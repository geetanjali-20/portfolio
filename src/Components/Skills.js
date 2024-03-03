import { useState, React } from "react";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/Skills.less";
import { observer } from "mobx-react";
import { motion } from "framer-motion";

const CardComponent = observer(({data}) => {
	const [isOpen, setIsOpen] = useState(false);
	const skill = data
	console.log("Skills of", skill.Heading, typeof(skill))
	return (
		<motion.div
			className={`card ${isOpen ? "expanded": "notexpanded"}`}
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
			<motion.h2 className={`${isOpen ? "expandedHeading": "notexpandedHeading"}`}>{skill.Heading}</motion.h2>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ duration: 1}}
					className="expand"
				>
					<p>
						{skill.skillsName.map((v, i) => (
							<div className="skillSet">{v}</div>
						))}
					</p>
					{/* <button>Read more</button> */}
				</motion.div>
			)}
		</motion.div>
	);
})

const Skills = observer(() => {
	const JsonData = dataJson.Skills;
	return (
		<div className="skillsSection">
			<div className="skillsHeading HeadingOfAll">Skills</div>
			<div className="cardsSection">
				{JsonData.map((value, index) => (
					<CardComponent data={value} key= {index} />
				))}
			</div>
		</div>
	);
})

export default Skills;
