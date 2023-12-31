import React from "react";
import dataJson from "../Configs/JSON/Content.json";
import "../Styles/About.less";
import logo from "../Assests/CompanyLogo.png";
const about = () => {
  window.setInterval(function() {
    var elem = document.getElementById('data');
    elem.scrollTop = elem.scrollHeight;
  }, 5000);
	return (
		<>
			{/* <--   About Section   -->*/}
			<div className="aboutSection" id="data">
				<div className="aboutTitle">{dataJson["About"]["Title"]}</div>
				<div className="aboutText">{dataJson["About"]["Text"]}</div>
			</div>

			{/* <--   Work Experience Section   -->*/}
			<div className="workExperience">
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
			</div>
		</>
	);
};

export default about;
