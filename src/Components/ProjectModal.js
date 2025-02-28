import { Modal } from "@mui/material";
import React from "react";
import AppStore from "../Configs/Store/appStore";
import { observer } from "mobx-react";
import appStore from "../Configs/Store/appStore";
import "../Styles/ProjectModal.less";

const ProjectModal = observer(() => {
	const data = appStore.projectdetails;

	const handleClose = () => {
		AppStore.setProjectModal(false);
	};
	return (
		<>
			<Modal open={AppStore.projectModal} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
				<div className="modalContainer">
					<div className="modalHeader">
						<div className="modalTitle">{data.ProjectName}</div>
						<div className="closeButton" onClick={handleClose}>
							&times;
						</div>
					</div>
					<div className="modalContent">
						<div className="modalImageContainer">{/* <img src={require(`../Assests/Projects/${data.ProjectImage}`)} alt={data.ProjectName} className="modalImage" /> */}</div>
						<div className="modalDescription">{data.ProjectDesc}</div>
						<div className="modalLinks">
							<a href={data.RepositoryLink} target="_blank" rel="noreferrer">
								<img src={require("../Assests/Projects/github.png")} alt="githubImg" className="iconImg" />
							</a>
							<a href={data.ProjectLink} target="_blank" rel="noreferrer">
								<img src={require("../Assests/Projects/link.png")} alt="linkImg" className="iconImg linkimg" />
							</a>
						</div>
					</div>
				</div>
			</Modal>
		</>
	);
});

export default ProjectModal;
