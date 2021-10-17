import React from 'react'
import "./studenttasks.css"
import User from "../../../../assets/person5.jpg"
import StudentTaskDoneCard from './studenttaskdonecard'

const StudentTaskDone = () => {
	return (
		<div className="student-task-all-todos">
			<div className="student-task-all-todos-content">
				<div className="student-task-all-todos-topic">
					<h3 className="student-task-all-todos-h3">
						completed (6)
					</h3>
				</div>
				<div className="student-task-all-todos-main">
					<ul className="student-task-all-todos-ul">
						{
							[1,2,3,4,5,6].map(
								() => (
									<li className="student-task-all-todos-li">
										<StudentTaskDoneCard user={User}/>
									</li>
								)
							)
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default StudentTaskDone
