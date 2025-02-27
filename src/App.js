import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import "./App.less";
import logo from "./Assests/Logo.png";
import HomeIcon from "./Assests/NavLinks/img1.png";
import portfolioIcon from "./Assests/NavLinks/img2.png";
import degreeIcon from "./Assests/NavLinks/img3.png";
import skillIcon from "./Assests/NavLinks/img4.png";
import callIcon from "./Assests/NavLinks/img5.png";
import { About, Contact, Footer, Home, Project, Skills } from "./Components";
import AppStore from "./Configs/Store/appStore";
import { Skeleton } from "@mui/material";

function App() {
	const [show, handleShow] = useState(false);
	const [loading, setLoading] = useState(true);

	useLayoutEffect(() => {
		var width = window.screen.width;
		AppStore.setDevice(width);
		if (width < 1021) {
			AppStore.setDevice(0);
			console.log("i am here", AppStore.device);
		} else {
			AppStore.setDevice(1);
			console.log("i am here", AppStore.device);
		}
	}, []);

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		// Simulate loading time
		const timer = setTimeout(() => {
			setLoading(false);
		}, 2000); // Adjust the time as needed

		return () => {
			window.removeEventListener("scroll", null);
			clearTimeout(timer);
		};
	}, []);

	if (loading) {
		return <Loading />;
	}

	return (
		<div className="App">
			<div>
				{/* Navbar */}
				<nav className={`navbar ${show && "navbar_black"}`}>
					<div className="navbar-container">
						<Link to="/" className="logo" smooth={true} duration={100}>
							<img src={logo} className="logoimg" alt="logo" />
						</Link>
						<div className="nav-links">
							<Link to="home" activeClassName="active" className="IconLinks" smooth={true} duration={100}>
								{/* <img src={HomeIcon} className="logos" alt="logo" /> */}
								<div>Home</div>
							</Link>
							<Link to="work" activeClassName="active" className="IconLinks" smooth={true} offset={-200} duration={100}>
								{/* <img src={portfolioIcon} className="logos" alt="logo" /> */}
								<div>Work</div>
							</Link>
							<Link to="education" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								{/* <img src={degreeIcon} className="logos" alt="logo" /> */}
								<div>Education</div>
							</Link>
							<Link to="skill" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								{/* <img src={skillIcon} className="logos" alt="logo" /> */}
								<div>Skills</div>
							</Link>
						</div>
						<Link to="contact" activeClassName="active" className="IconLinks">
							<img src={callIcon} className="logos" alt="logo" smooth={true} offset={-100} duration={100} />
						</Link>
					</div>
				</nav>
			</div>

			<Suspense fallback={<SkeletonLoading />}>
				<Home />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<About />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Skills />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Project />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Contact />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Footer />
			</Suspense>
		</div>
	);
}
function SkeletonLoading() {
	return <Skeleton animation="wave" active />;
}

function Loading() {
	return (
		<div className="spinner-container">
			<div className="spinner"></div>
			<div className="spinner-text">Portfolio Loading.... </div>
		</div>
	);
}

export default App;
