import React from "react";
import "./Mainpage.css";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
//import Videos from "../Media/Card/video/videos";

function Mainpage(props) {
	return (
		<div className="main">
			<Header />
		{/* 	
		<Videos />
		*/}			
 			<Footer />
		</div>
	);
}

export default Mainpage;
