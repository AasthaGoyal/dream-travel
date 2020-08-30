import Header from "./Header";
import Footer from "./Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./App";
import React from "react";
import Destination from "./Destination";
import Trip from "./Trip";
// import Main from "./Main";
import Map from "./Map";
import Login from "./Login";
import Profile from './Profile';

class Layout extends React.Component {
	render() {
		return (
			<Router>
				<div>
					<Header />
					<br />
					<Switch>
						<Route exact={true} path='/App' component={App} />
						<Route exact path='/Destination' component={Destination} />
						<Route exact path='/Trip' component={Trip} />
						<Route exact path='/Login' component={Login} />
						<Route exact path='/Map' component={Map} />
						{/* <Route exact path='/Main' component={Main} /> */}
						<Route exact path='/Profile' component={Profile} />
					</Switch>
					<Footer />
				</div>
			</Router>
		);
	}
}

export default Layout;
