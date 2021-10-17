import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import "./studentassignment.css"

const StudentAssignmentCard = ({user}) => {
	return (
		<div className="student-assignment-card">
			<div className="student-assignment-cards-top">
				<h5 className="student-assignment-cards-priority">
					high
				</h5>
				<h5 className ="student-assignment-cards-top-date">
					Friday 15 October 2021
				</h5>
			</div>
			<div className="student-assignment-cards-header">
				<h4 className="student-assignment-cards-h4">
					A todo header here
				</h4>
			</div>
			<div className="student-assignment-cards-info">
				<p className ="student-assignment-cards-p">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				</p>
			</div>
			<div className="student-assignment-cards-bottom">
				<div className="student-assignment-cards-bottom-icon">
					<img
						src={user}
						alt="user + icon"
						className="student-assignment-cards-icon"
					/>
					<p className="student-assignment-cards-p">
						Joseph muvevi
					</p>
				</div>
				<FontAwesomeIcon
					icon={faEllipsisV}
					className="student-task-action-button"
					/>
			</div>
		</div>
	)
}

export default StudentAssignmentCard
