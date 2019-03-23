import React from 'react';
import pic from './ProfilePicture.png'
import './ProfilePicture.css';

class ProfilePicture extends React.Component {



	render() {

		return (
			<img 	className="profile-pic" 	
					src={pic}
					
					alt="">  
			</img>
		)
		
	}
}

export default ProfilePicture;