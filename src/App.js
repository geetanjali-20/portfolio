import { Suspense } from "react";
import "./App.less";
import {Home, About} from "./Components";

function App() {
	return (
		<div className="App">
			<Suspense fallback={<Loading/>}>
				<Home/>
			</Suspense>
			<Suspense fallback={<Loading/>}>
				<About/>
			</Suspense>
		</div>
	);
}
function Loading() {
  return <h2>Loading...</h2>;
}

export default App;
