import React from "react";
import NotFound from "./NotFound"
import HomePage from "./HomePage";
import Myproject from "./Myproject";
import Contactme from "./Contactme";
import Aboutme from "./Aboutme";
import Offer from "./Offer";
import NFT from "./NTF"
import Design from "./Design"
import Soon from "./Soon";
import { Routes, Route } from "react-router-dom";

const Portfolio = () => {
	return (
		<React.Fragment>
			<Routes>
				<Route path="/" element={<HomePage/>}/>
				<Route path="/project" element={<Myproject/>}/>
				<Route path="/about" element={<Aboutme/>}/>
				<Route path="/contact" element={<Contactme/>}/>
				<Route path="offerproject" element={<Offer/>}/>
				<Route path="nftproject" element={<NFT/>}/>
				<Route path="designproject" element={<Design/>}/>
				<Route path="soon" element={<Soon/>}/>
				<Route path="https://hokimakademiyasi.uz"/>
				<Route path="https://www.instagram.com/abd_ulvoris812"/>
				<Route path="https://github.com/abdulvoris812"/>
				<Route path="https://vercel.com/abdulvoris812s-projects/figma-project"/>
				<Route path=""/>
				<Route path="*" element={<NotFound/>}/>
			</Routes>
		</React.Fragment>
	);
};

export default Portfolio;