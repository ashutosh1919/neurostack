import React from "react";
import "./Header.css";
import { Fade } from "react-reveal";
import { NavLink, Link } from "react-router-dom";

function Header() {
	return (
		<Fade top>
			<div>
				<header className="header">
					<NavLink to="/splash" tag={Link} className="logo">
						<div className="logo-div">
                            <img className="logo-img" src={require('../../assets/images/logo.svg')} />
                        </div>
					</NavLink>
					<input className="menu-btn" type="checkbox" id="menu-btn" />
					<label className="menu-icon" htmlFor="menu-btn">
						<span className="navicon"></span>
					</label>
					<ul className="menu">
						<li>
							<NavLink
								to="/home"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/brain"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Brain
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/heart"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Heart
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/neurons"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Neurons
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/contact"
								tag={Link}
								activeStyle={{ fontWeight: "bold" }}
							>
								Contact
							</NavLink>
						</li>
					</ul>
				</header>
			</div>
		</Fade>
	);
}
export default Header;
