import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "../Component/HomePage";
import SecondPage from "../Component/SecondPage";
import ThirdPage from "../Component/ThirdPage";

const HmeRoute = () => {
	return (
		<>
			<Switch>
				<Route exact path='/' component={HomePage}></Route>
				<Route exact path='/Second' component={SecondPage}></Route>
				<Route exact path='/Third' component={ThirdPage}></Route>
			</Switch>
		</>
	);
};

export default HmeRoute;
