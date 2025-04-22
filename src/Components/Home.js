import React, { useState, useEffect } from "react";
import purify from "dompurify";
import "../Styles/Home.less";
import my from "../Assests/img.jpg";
import scrollDown from "../Assests/arrow.png";
import dataJson from "../Configs/JSON/Content.json";
import Typewriter from "typewriter-effect";
import LinkedIn from "../Assests/LinkedIn.png";
import Mail from "../Assests/email.png";
import Linktree from "../Assests/link.png";
import Github from "../Assests/github.png";
import Code from "../Assests/code.png";
import { Button } from "@mui/material";
const Home = () => {
	const JsonData = dataJson.Home.Socials;
	const [isVisible, setIsVisible] = useState(false);
	const [isBlinking, setIsBlinking] = useState(true);
	useEffect(() => {
		// Set a timeout to make the element visible after 3000 milliseconds (3 seconds)
		const timeoutId = setTimeout(() => {
			setIsVisible(true);
		}, 300);
		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		// Toggle the blinking effect every 1 second (1000 milliseconds)
		const intervalId = setInterval(() => {
			setIsBlinking((prevBlinking) => !prevBlinking);
		}, 30000);

		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	}, []);
	const data = [LinkedIn, Mail, Github, Code, Linktree];

	// ...existing code...

	return (
		<div className="homeBody" id="home">
			<div className="HomePage">
				<div className="centerElements">
					<div className="leftHalf">
						<img src={my} className="myImage" alt="myImage" />
					</div>
					<div className="rightHalf">
						<div className="helloText">
							<div className="hey">
								<span class="wave">👋</span>Hey!, I am
							</div>
							<Typewriter
								onInit={(typewriter) => {
									typewriter
										.typeString(dataJson["Home"]["MainText1"])
										.pauseFor(1500)
										.deleteAll()
										.typeString("A Software Developer")
										.pauseFor(1500)
										.deleteAll()
										.typeString(dataJson["Home"]["MainText1"])
										.start();
								}}
								className="mainText"
							/>
						</div>
						<div className="aboutSection">
							<div className="aboutTitle">{dataJson["About"]["Title"]}</div>
								<div className="aboutText" dangerouslySetInnerHTML={{__html:purify.sanitize(dataJson["About"]["Text"])}}></div>
							{/* <div className="aboutText">{dataJson["About"]["Text"]}</div> */}
						</div>
					</div>
				</div>
			</div>
			<div className="homeSocials">
				{JsonData.map((value, index) => (
					<div className="social" key={index}>
						<a href={value.link} className="social-icon-link" rel="noreferrer" target="_blank">
							<img src={data[index]} alt={value.alt} className="social-icon" />
						</a>
					</div>
				))}
			</div>
		</div>
	);

	// ...existing code...
};

export default Home;
