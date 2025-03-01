import { Skeleton } from "@mui/material";
import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import "./App.less";
import logo from "./Assests/Logo.png";
import callIcon from "./Assests/NavLinks/img5.png";
import { About, Contact, Footer, Home, Project, Skills, Certificates } from "./Components";
import AppStore from "./Configs/Store/appStore";
import ProjectModal from "./Components/ProjectModal";

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
		}, 1500); // Adjust the time as needed

		return () => {
			window.removeEventListener("scroll", null);
			clearTimeout(timer);
		};
	}, []);
	function SkeletonLoading() {
		return <Skeleton active />;
	}

	function Loading() {
		return (
			<div className="spinner-container">
				<div className="spinner"></div>
				<div className="spinner-text">Portfolio Loading.... </div>
			</div>
		);
	}
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
								<div>Home</div>
							</Link>
							<Link to="work" activeClassName="active" className="IconLinks" smooth={true} offset={-200} duration={100}>
								<div>Work</div>
							</Link>
							<Link to="education" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<div>Education</div>
							</Link>
							<Link to="skill" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<div>Skills</div>
							</Link>
							<Link to="Project" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<div>Projects</div>
							</Link>
							<Link to="Roles" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<div>Positions</div>
							</Link>
							<Link to="Certificates" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<div>Certificates</div>
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
				<Certificates />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Contact />
			</Suspense>
			<Suspense fallback={<SkeletonLoading />}>
				<Footer />
			</Suspense>
			<ProjectModal />
		</div>
	);
}

export default App;
