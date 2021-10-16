import { faBell, faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./normalusertopnav.css"

const NormalUserTopNav = () => {
	return (
		<div className="normal-user-top-nav">
			<div className="normal-user-top-nav-content">
				<div className="normal-user-top-nav-item">
					<input 
						type="search"
						placeholder="Search for anything"
						className="input search"
						/>
				</div>
				<div className="normal-user-top-nav-item">
					<FontAwesomeIcon
						icon={faBell}
						className="font-awesome-top-nav"
						/>
					<p className="normal-user-top-nav-item">
						notification
					</p>
				</div>
				<div className="normal-user-top-nav-item">
					<FontAwesomeIcon
						icon={faSignOutAlt}
						className="font-awesome-top-nav"
						/>
					<p className="normal-user-top-nav-item">
						sign out
					</p>
				</div>
			</div>
		</div>
	)
}

export default NormalUserTopNav
