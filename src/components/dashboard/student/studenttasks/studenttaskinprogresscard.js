import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import "./studenttasks.css"

const StudentTaskInprogressCard = ({user}) => {
	return (
		<div className="student-task-card">
			<div className="student-task-cards-top">
				<h5 className="student-task-cards-priority">
					high
				</h5>
				<h5 className ="student-task-cards-top-date">
					Friday 15 October 2021
				</h5>
			</div>
			<div className="student-task-cards-header">
				<h4 className="student-task-cards-h4">
					A todo header here
				</h4>
			</div>
			<div className="student-task-cards-info">
				<p className ="student-task-cards-p">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				</p>
			</div>
			<div className="student-task-cards-bottom">
				<div className="student-task-cards-bottom-icon">
					<img
						src={user}
						alt="user + icon"
						className="student-task-cards-icon"
					/>
					<p className="student-task-cards-p">
						Joseph muvevi
					</p>
				</div>
				<FontAwesomeIcon
					icon={faEllipsisV}
					className="student-tast-action-button"
					/>
			</div>
		</div>
	)
}

export default StudentTaskInprogressCard
