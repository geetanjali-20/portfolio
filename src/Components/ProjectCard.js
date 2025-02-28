import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import * as React from "react";
import githubImg from "../Assests/Projects/github.png";
import linkImg from "../Assests/Projects/link.png";
import appStore from "../Configs/Store/appStore";
import "../Styles/Project.less";

export default function RecipeReviewCard({ project, id }) {
	const projectLink = () => {
		appStore.setProjectModal(true);
		appStore.setProjectDetails(project);

	};
	return (
		<>
			<Card className="projectCard" key={id} onClick={projectLink}>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: project.AvatarColor }} aria-label="recipe">
							{project.ProjectName.charAt(0)}
						</Avatar>
					}
					className="projectCardHeader"
					title={project.ProjectName}
				/>
				<img src={require(`../Assests/Projects/${project.ProjectImage}`)} alt={project.ProjectName} className="projectImage" />
				<CardContent className="projectCardContent">
					<Typography variant="body2" className="projectDescription">
						{project.ProjectDescription}
					</Typography>
				</CardContent>
				<CardActions disableSpacing className="projectCardActions">
					<div className="projectLinks">
						<a href={project.RepositoryLink} target="_blank" rel="noreferrer">
							<img src={githubImg} alt="githubImg" className="iconImg" />
						</a>
						<a href={project.ProjectLink} target="_blank" rel="noreferrer">
							<img src={linkImg} alt="linkImg" className="iconImg linkimg" />
						</a>
					</div>
					<div className="knowMore" onClick={projectLink} >Know More</div>
				</CardActions>
			</Card>

			
		</>
	);
}
