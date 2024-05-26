import React from "react";
import "../Styles/Skills.less";

const SkillCard = ({skill}) => {
	return (
		<div className="skill-card">
			{/* <div className="skill-icon">{skill.icon}</div>{" "} */}
            <div dangerouslySetInnerHTML={{__html: skill.icon}} className="skillIcons"></div>
			{/* <label className="skill-name">{skill.name}</label>{" "} */}
		</div>
	);
};

export default SkillCard;
