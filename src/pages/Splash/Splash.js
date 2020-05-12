import React, { Component } from "react";
import "./Splash.css";
import { Redirect } from "react-router-dom";
import SplashLogo from "../../components/SplashLogo/SplashLogo.js";

function AnimatedSplash(props) {
	return (
		<div className="logo_wrapper">
			<div className="screen">
				<SplashLogo id="logo" />
			</div>
		</div>
	);
}

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			redirect: false,
		};
	}

	componentDidMount() {
		this.id = setTimeout(() => this.setState({ redirect: true }), 6000);
	}

	componentWillMount() {
		clearTimeout(this.id);
	}

	render() {
        return this.state.redirect ? <Redirect to="/home" /> : <AnimatedSplash />;
	}
}

export default Splash;
