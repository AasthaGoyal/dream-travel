import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import App from "./pages/App";
import React from "react";
import Destination from "./pages/Destination";
import Trip from "./pages/Trip";
import Map from "./pages/Map";
import Login from "./pages/Login";
import Profile from './pages/Profile';

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
