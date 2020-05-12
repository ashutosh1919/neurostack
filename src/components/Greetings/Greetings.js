import React, { Component } from 'react';
import {Fade} from 'react-reveal';
import './Greetings.css';
// import greetData from '../../shared/greet_data.js';

class Greetings extends Component {
    render(){
        return (
					<Fade bottom>
						<div className="greetings-main">
							<div className="greetings-text">
								<h2 className="greetings-title">
									Welcome to the portal where you can find best resources on
									Neurology.
								</h2>
								<p className="greetings-subtitle">
									The resources attached to this website are totally belong to
									Dr. Mausamin Hathidara.
								</p>
							</div>
							<div className="greetings-img">
								<img
									className="greetings-img-i"
									src={require(`../../assets/images/doctors_greetings.svg`)}
									alt=""
								/>
							</div>
						</div>
					</Fade>
				);
    }
}

export default Greetings;