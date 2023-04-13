//library import
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages import
import Home from "./pages/Home";
import Details from "./pages/Details";
import Form from "./pages/Form";

//components import
import Navigation from "./components/navigation/Navigation";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:friend" element={<Details />} />
					<Route path="/addFriend" element={<Form />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
