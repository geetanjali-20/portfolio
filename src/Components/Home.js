import React, { useState, useEffect } from "react";
import "../Styles/Home.less";
import my from "../Assests/my.png";
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

	return (
		<div className="homeBody" id="home">
			<div className="HomePage">
				<div className="centerElements">
					<img src={my} className="myImage" alt="myImage" />
					<div className="helloText">
						<Typewriter
							onInit={(typewriter) => {
								typewriter
									.typeString(dataJson["Home"]["MainText1"])
									.start();
							}}
						/>
					</div>
					<div className="aboutSection">
						<div className="aboutTitle">
							{dataJson["About"]["Title"]}
						</div>
						<div className="aboutText">
							{dataJson["About"]["Text"]}
						</div>
					</div>
				</div>
				
			</div>
			<div class="homeSocials">
				{JsonData.map((value, index) => (
					<div class="social">
						<a
							href={value.link}
							class="social-icon-link"
							rel="noreferrer"
							target="_blank"
						>
							<img
								src={data[index]}
								alt={value.alt}
								class="social-icon"
							/>
						</a>
					</div>
				))}
			</div>
			{isVisible && (
				<Button
					className={`blinking-button ${isBlinking ? "blink" : ""}`}
					id="scrollId"
					onClick={() => {
						window.scrollTo(0, 700);
						setIsVisible(false);
					}}
				>
					<img
						src={scrollDown}
						className="arrowImage"
						alt="myImage"
					/>
					<div>Know More</div>
				</Button>
			)}
		</div>
	);
};

export default Home;
