import { Suspense, useEffect, useLayoutEffect, useState } from "react";
import "./App.less";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	NavLink,
} from "react-router-dom";
import { Home, About , Skills,Project, Footer} from "./Components";
import logo from "./Assests/Glogo.png";
import HomeIcon from "./Assests/home.png";
import degreeIcon from "./Assests/degree.png";
import portfolioIcon from "./Assests/portfolio.png";
import skillIcon from "./Assests/skill.png";
import projectIcon from "./Assests/project.png";
import callIcon from "./Assests/call.png";
import AppStore from "./Configs/Store/appStore";

function App() {
	const [show, handleShow] = useState(false);
	console.log("i am", window.screen.width)
	
	useLayoutEffect(()=>{var width = window.screen.width
		AppStore.setDevice(width)
		if (width < 1021) {
			AppStore.setDevice(0);
			console.log("i am here",AppStore.device)
		} else {
			AppStore.setDevice(1);
			console.log("i am here",AppStore.device)
		}})

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
			<Router>
				<div>
					{/* Navbar */}
					<nav className={`navbar ${show && "navbar_black"}`}>
						<div className="navbar-container">
							<NavLink to="/" className="logo">
								<img
									src={logo}
									className="logoimg"
									alt="logo"
								/>
							</NavLink>
							<div className="nav-links">
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
									exact
								>
									<img
										src={HomeIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
								
								
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
								>
									<img
										src={portfolioIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
								>
									<img
										src={degreeIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
								>
									<img
										src={skillIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
								>
									<img
										src={projectIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
								<NavLink
									to="/"
									activeClassName="active"
									className="IconLinks"
								>
									<img
										src={callIcon}
										className="logos"
										alt="logo"
									/>
								</NavLink>
							</div>
						</div>
					</nav>

					{/* Routes */}
					<Routes>
						<Route path="/" exact component={Home} />
						<Route path="/about" component={About} />
					</Routes>
				</div>
			</Router>
			<Suspense fallback={<Loading />}>
				<Home />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<About />
			</Suspense>
			<Suspense fallback={<Loading />}>
				<Skills />
			</Suspense>
			{/* <Suspense fallback={<Loading />}>
				<Project />
			</Suspense> */}
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
