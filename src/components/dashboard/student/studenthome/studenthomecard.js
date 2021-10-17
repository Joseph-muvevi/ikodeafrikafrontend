import { faInfo } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./studenthome.css"

const StudentHomeCard = () => {
	return (
		<div className="student-home-card">
				<div className="student-home-card-fontawesome">
					<FontAwesomeIcon
						icon={faInfo}
						className="font-awesome-home-card"
						/>
				</div>
				<h3 className="student-home-card-h3">
					150m
				</h3>
				<p className="student-home-card-light-p">
					Another smaller text
				</p>
		</div>
	)
}

export default StudentHomeCard
