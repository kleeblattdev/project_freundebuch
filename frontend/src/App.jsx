//library import
import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages import
import Home from "./pages/Home";
import Details from "./pages/Details";
import Form from "./pages/Form";

//components import
import Navigation from "./components/navigation/Navigation";
import Footer from "./components/footer/Footer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<Navigation />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/:friendId" element={<Details />} />
					<Route path="/addFriend" element={<Form />} />
				</Routes>
				<Footer />
			</BrowserRouter>
		</div>
	);
}

export default App;
