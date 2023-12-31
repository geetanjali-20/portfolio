import React, { useState, useEffect } from "react";
import "../Styles/Home.less";
import my from "../Assests/my.png";
import dataJson from "../Configs/JSON/Content.json";
import Typewriter from "typewriter-effect";
import { Button } from "@mui/material";
const Home = () => {
	const [isVisible, setIsVisible] = useState(false);
	const [isBlinking, setIsBlinking] = useState(true);
	useEffect(() => {
		// Set a timeout to make the element visible after 3000 milliseconds (3 seconds)
		const timeoutId = setTimeout(() => {
			setIsVisible(true);
		}, 3000);
		return () => clearTimeout(timeoutId);
	}, []);

	useEffect(() => {
		// Toggle the blinking effect every 1 second (1000 milliseconds)
		const intervalId = setInterval(() => {
		  setIsBlinking((prevBlinking) => !prevBlinking);
		}, 300);
	
		// Clear the interval when the component is unmounted
		return () => clearInterval(intervalId);
	  }, []);
	return (
			<div className="homeBody">
				<div className="centerElements"><img src={my} className="myImage" alt="myImage" />
				<div className="helloText">
					<Typewriter
						onInit={(typewriter) => {
							typewriter
								.typeString(dataJson["Home"]["MainText1"])
								.pauseFor(1000)
								.deleteAll()
								.typeString(dataJson["Home"]["MainText2"])
								.pauseFor(1000)
								.deleteAll()
								.typeString(dataJson["Home"]["MainText3"])
								.start();
						}}
					/>
				</div>
				</div>
				{isVisible && (
					<Button
						className={`blinking-button ${isBlinking ? 'blink' : ''}`}
						id="scrollId"
						onClick={() => {window.scrollTo(0, 700);
							setIsVisible(false);}}
					>
						Scroll down to explore more...
					</Button>
				)}
			</div>
		
	);
};

export default Home;
