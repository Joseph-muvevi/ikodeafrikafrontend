import React from 'react'
import "./normalusersocialmedia.css"
import SMBanner from "../../../../assets/tech2.jpg"
import Person from "../../../../assets/person1.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCommentAlt, faHome, faProjectDiagram, faUserCog } from '@fortawesome/free-solid-svg-icons'

const NormalSocialMediaBanner = () => {
	return (
		<div className="social-media-banner">
			<div className="social-media-banner-top">
				<img src={SMBanner}
					className="social-media-banner-background-image"
					alt="username variable + background banner"
					title="username variable + background banner"
					/>

			</div>
			<div className="social-media-banner-bottom">
				<div className="social-media-image">
					<img src={Person}
						className="social-media-banner-icon-image"
						alt="username variable + background banner"
						title="username variable + background banner"
						/>
						<h4 className="social-media-banner-icon-h4">
							Username
						</h4>
				</div>
				<div className="social-media-sub-navs">
					<div className="social-media-sub-navs-item">
						<FontAwesomeIcon 
							icon={faHome}
							className="social-media-banner-icons"/>
						default
					</div>
					<div className="social-media-sub-navs-item">
						<FontAwesomeIcon 
							icon={faUserCog}
							className="social-media-banner-icons"/>
						colaboration
					</div>
					<div className="social-media-sub-navs-item">
						<FontAwesomeIcon 
							icon={faProjectDiagram}
							className="social-media-banner-icons"/>
						project
					</div>
					<div className="social-media-sub-navs-item">
						<FontAwesomeIcon 
							icon={faCommentAlt}
							className="social-media-banner-icons"/>
						message
					</div>
				</div>
			</div>
		</div>
	)
}

export default NormalSocialMediaBanner
