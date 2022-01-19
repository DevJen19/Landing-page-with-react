import React from "react";
import { Jumbotron } from "./Jumbotron.jsx";
import { Navbar } from "./Navbar.jsx";

//create your first component
const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container">
				<Jumbotron />
			</div>
		</div>
	);
};

export default Home;
