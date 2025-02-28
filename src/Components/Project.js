import React, { useRef } from "react";
import nextButton from "../Assests/Projects/next.png";
import ProjectsData from "../Configs/JSON/Projects.json";
import "../Styles/Project.less";
import RecipeReviewCard from "./ProjectCard";

const Project = () => {
	const ref = useRef();

	const handlePrev = () => {
		ref.current.scrollBy({ left: -750, behavior: "smooth" });
	};

	const handleNext = () => {
		ref.current.scrollBy({ left: 750, behavior: "smooth" });
	};
	return (
		<div className="projectSection" id="Project">
			<div className="ProjectHeading">Projects</div>

			<div className="projectCards" ref={ref}>
				{ProjectsData.Projects.map((project, index) => (
					<RecipeReviewCard project={project} id={index} />
				))}
			</div>
			<div className="projectContainer">
				<button onClick={handlePrev} className="prevButton">
					<img src={nextButton} alt="nextButton" />
				</button>
				<button onClick={handleNext} className="nextButton">
					<img src={nextButton} alt="nextButton" />
				</button>
			</div>
		</div>
	);
};

export default Project;
