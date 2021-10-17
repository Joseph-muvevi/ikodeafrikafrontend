import { faBell, faCommentAlt, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./studenttopnav.css"
import Person from "../../../../assets/person5.jpg"

const StudentTopnav = () => {
	return (
		<div className="student-top-nav">
			<div className="student-top-nav-content">
				<FontAwesomeIcon
					icon={faSearch}
					className="fontawesome-top-nav"
				/>
				<div className="student-top-nav-right">
					<FontAwesomeIcon
						icon={faCommentAlt}
						className="fontawesome-top-nav"
					/>
					<FontAwesomeIcon
						icon={faBell}
						className="fontawesome-top-nav"
					/>
					<img
						src={Person}
						alt="the user + icon"
						className="img-top-nav"
					/>
				</div>
			</div>
		</div>
	)
}

export default StudentTopnav
