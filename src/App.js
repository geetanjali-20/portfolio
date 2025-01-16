import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import { Link } from "react-scroll";
import "./App.less";
// import callIcon from "./Assests/call.png";
// import degreeIcon from "./Assests/degree.png";
import logo from "./Assests/Glogo.png";
// import HomeIcon from "./Assests/home.png";
// import portfolioIcon from "./Assests/portfolio.png";
// import skillIcon from "./Assests/skill.png";
import HomeIcon from "./Assests/NavLinks/img1.png"
import portfolioIcon from "./Assests/NavLinks/img2.png"
import degreeIcon from "./Assests/NavLinks/img3.png"
import skillIcon from "./Assests/NavLinks/img4.png"
import callIcon from "./Assests/NavLinks/img5.png"
import { About, Contact, Footer, Home, Project, Skills } from "./Components";
import AppStore from "./Configs/Store/appStore";

function App() {
	const [show, handleShow] = useState(false);
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
	});

	useEffect(() => {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 100) {
				handleShow(true);
			} else handleShow(false);
		});

		return () => {
			window.removeEventListener("scroll", null);
		};
	}, []);
	return (
		<div className="App">
			<div>
				{/* Navbar */}
				<nav className={`navbar ${show && "navbar_black"}`}>
					<div className="navbar-container">
						{/* <Link to="/" className="logo">
							<img src={logo} className="logoimg" alt="logo" />
						</Link> */}
						<div className="nav-links">
							<Link to="home" activeClassName="active" className="IconLinks" smooth={true} duration={100}>
								<img src={HomeIcon} className="logos" alt="logo" />
							</Link>

							<Link to="work" activeClassName="active" className="IconLinks" smooth={true} offset={-200} duration={100}>
								<img src={portfolioIcon} className="logos" alt="logo" />
							</Link>
							<Link to="education" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<img src={degreeIcon} className="logos" alt="logo" />
							</Link>
							<Link to="skill" activeClassName="active" className="IconLinks" smooth={true} offset={-100} duration={100}>
								<img src={skillIcon} className="logos" alt="logo" />
							</Link>
							{/* <Link
								to="/"
								activeClassName="active"
								className="IconLinks"
							>
								<img
									src={projectIcon}
									className="logos"
									alt="logo"
								/>
							</Link> */}
							<Link to="contact" activeClassName="active" className="IconLinks">
								<img src={callIcon} className="logos" alt="logo" smooth={true} offset={-100} duration={100} />
							</Link>
						</div>
					</div>
				</nav>
			</div>

			<Suspense fallback={<Loading />}>
				<Home />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<About />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Skills />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Project />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Contact />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Footer />
			</Suspense>
		</div>
	);
}
function Loading() {
	return <h2>Loading...</h2>;
}

export default App;
