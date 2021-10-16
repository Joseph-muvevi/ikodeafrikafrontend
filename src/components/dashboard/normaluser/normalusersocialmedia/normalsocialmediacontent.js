import React from 'react'
import Addpost from './addpost'
import Allposts from './allposts'
import "./normalusersocialmedia.css"

const NormalSocialMediaContent = () => {
	return (
		<div className="normal-social-media-content">
			<Addpost/>
			<Allposts/>
		</div>
	)
}

export default NormalSocialMediaContent
