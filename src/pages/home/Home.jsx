

import React from "react";
import NavBar from "../navbar/NavBar";
import Header from "../../component/header/Header";
import Picture from "../../component/Picture/Picture";
import Types from "../../component/type/Types";
import ComponentForm from "../../component/componentform/ComponentForm";
import ComponentFooter from "../../component/componetfooter/ComponentFooter";

const Home = () => {
	return (
		
		<div >
		
		<NavBar />
		<Header/>
		<Picture/>
		<Types/>
		<ComponentForm/>
		<ComponentFooter/>
	

		</div>
	);
};

export default Home;
