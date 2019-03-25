import React from 'react';
import './About.css';
import ProfilePicture from '../ProfilePicture/ProfilePicture.js';

class About extends React.Component {


	render() {
		return (
			<div 	className="about-div">  
					<ProfilePicture />
					<p>New Graduate from UC Santa Cruz with a bachelors in Computer Science located in San Francisco. 
						<br/> Experienced in backend and frontend development, Looking for Software Engineering opportunities in the Bay Area.
					</p>
					
			</div>
		)
	}
}

export default About;