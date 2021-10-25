import React, {useState} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons'
import "./studenttasks.css"
import EditModal from '../../../interfaces/editmodal'

const StudentTaskDoneCard = ({user}) => {
	const [editModal, setEditModal] = useState(false);

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
					onClick={() => setEditModal(!editModal)}
					icon={faEllipsisV}
					className="ellipsis-toggler"
					/>
				{editModal && <EditModal editModal = {editModal} />}
			</div>
		</div>
	)
}

export default StudentTaskDoneCard
