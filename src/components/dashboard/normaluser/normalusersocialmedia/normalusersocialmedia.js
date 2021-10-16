import React from 'react'
import NormalSocialMediaAbout from './normalsocialmediaabout'
import NormalSocialMediaBanner from './normalsocialmediabanner'
import NormalSocialMediaContent from './normalsocialmediacontent'
import "./normalusersocialmedia.css"

const NormalUserSocialMedia = () => {
	return (
		<div className="user-social-media">
			<div className="social-media-grid-banner">
				<NormalSocialMediaBanner/>
				<hr className="alt-hr"/>
			</div>
			<div className="social-media-grid-about">
				<NormalSocialMediaAbout/>
			</div>
			<div className="social-media-grid-content">
				<NormalSocialMediaContent/>
			</div>
		</div>
	)
}

export default NormalUserSocialMedia
