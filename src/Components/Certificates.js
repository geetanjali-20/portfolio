import { motion } from "framer-motion";
import { observer } from "mobx-react";
import { React } from "react";
import { useInView } from "react-intersection-observer";
import dataJson from "../Configs/JSON/Certificates.json";
import "../Styles/Certificates.less";
import EnigmaLogo from "../Assests/Enigma.png";
import CreativeuLogo from "../Assests/Creativeu.png";
import linkImg from "../Assests/Projects/link.png";

const Certificates = observer(() => {
	const [ref, inView] = useInView();
	const certificates = dataJson.Certificates;

	const handleCertificateModal = (data) => {
		window.open(data.link, "_blank");
	};
	return (
		<>
			<motion.div
				className="RolesSection"
				ref={ref}
				style={{
					transform: inView ? "none" : "translateX(200px)",
					opacity: inView ? 1 : 0,
					transition: "all 1.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.1s",
				}}
				id="Roles"
			>
				<div className="RolesSectionContainer">
					<div className="RolesHeading">Roles of Responsibilities</div>
					<div className="RolesMainSectionCard">
						<div className="RolesFirstSectionCard RolesCard">
							<div className="RolesImage">
								<img className="RolesCardImage" src={EnigmaLogo} alt="EnigmaLogo" />
							</div>
							<div className="RolesDescription">
								<div className="RolesCardHeading">
									President | ( 2022-2023 )
									<span className="clubs">
										Enigma Programming Club
										<a href="https://www.instagram.com/p/Cfbu6l0JnDk/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
											<img src={linkImg} alt="linkImg" />
										</a>
									</span>
								</div>
								<div className="RolesCardDescription">
									Enigma is one of the esteemed club of the college which more community of coders then a club with more than 400+ members weekly Programming Contest series, competitive programming
									sessions Talk with Alumini of enigma etc were organised and managed by me.
								</div>
							</div>
						</div>
						<div className="RolesSecondSectionCard RolesCard">
							<div className="RolesImage">
								<img className="RolesCardImage" src={CreativeuLogo} alt="CreativeuLogo" />
							</div>
							<div className="RolesDescription">
								<div className="RolesCardHeading">
									Joint Secretary | (2021-2022){" "}
									<span className="clubs">
										Creative U-Club ABESEC{" "}
										<a href="https://www.instagram.com/p/CUcFkqJBVA3/?img_index=3">
											<img src={linkImg} alt="linkImg" />
										</a>
									</span>
								</div>
								<div className="RolesCardDescription">
									Creative U is a famous club in ABES which organises creative events including Cultural events, Art-craft, Musical bands etc, During my tenure I organised and managed 2 successful
									mega events of the year and a team of 15+ core members and 200 members.
								</div>
							</div>
						</div>
					</div>
				</div>
			</motion.div>
			<div className="CertificatesSection" id="Certificates">
				<div className="CertificatesSectionContainer">
					<div className="CertificateHeading">Certifications</div>
					<div className="CertificatesMainSectionCard">
						<div className="CertificatesSectionCard">
							{certificates.map((certificate, index) => {
								return (
									<>
										<div className="CertificatesSectionCardImage" onClick={handleCertificateModal.bind(this, certificate)} key={index}>
											<img src={require(`../Assests/Certificates/${certificate.image}`)} alt={certificate.name} />
										</div>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</>
	);
});

export default Certificates;
