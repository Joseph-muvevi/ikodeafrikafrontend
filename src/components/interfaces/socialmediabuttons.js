import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import "./interfaces.css"

const SocialMediaButtons = () => {
	return (
		<div className="social-media-buttons">
			<FontAwesomeIcon
				icon={faFacebook}
				className="social-media-buttons-icon"
				color="#3b5998"
				/>
			<FontAwesomeIcon
				icon={faTwitter}
				className="social-media-buttons-icon"
				color="#00acee"
				/>
			<FontAwesomeIcon
				icon={faLinkedin}
				className="social-media-buttons-icon"
				color="#0077b5"
				/>
			<FontAwesomeIcon
				icon={faGithub}
				className="social-media-buttons-icon"
				color="#333"
				/>
		</div>
	)
}

export default SocialMediaButtons
