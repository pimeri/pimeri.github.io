import React from 'react';
import pic from './ProfilePicture.png'
import './ProfilePicture.css';
// import '../../../public/reset.css';

const style = {
	color: "#6b727f",
	"fontSize": "250%",
	// "marginLeft":"10px"
}
class ProfilePicture extends React.Component {



	render() {

		return (
			<div className="profile-container">
				<img className="profile-pic" 	
					 src={pic}
					 alt="">  
				</img>
				<ul className="icon-container">
					<li className="links">
						<a 	
							href="https://www.linkedin.com/in/pablo-imeri">
							<i 
						className="fab fa-linkedin"
						style={style}>
					</i> 
						</a>

					</li>
					<li className="links">
						<a 
					
					href="https://www.github.com/pimeri" >
					<i
						className="fab fa-github-square"
						style={style} >
					</i>
				</a>
					</li>
					
				</ul>
			</div>
		)
		
	}
}



export default ProfilePicture;