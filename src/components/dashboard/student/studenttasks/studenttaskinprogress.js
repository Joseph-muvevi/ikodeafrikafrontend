import React from 'react'
import "./studenttasks.css"
import User from "../../../../assets/person4.jpg"
import StudentTaskInprogressCard from './studenttaskinprogresscard'

const StudentTaskInProgress = () => {
	return (
		<div className="student-task-all-todos">
			<div className="student-task-all-todos-content">
				<div className="student-task-all-todos-topic">
					<h3 className="student-task-all-todos-h3">
						in progress (3)
					</h3>
				</div>
				<div className="student-task-all-todos-main">
					<ul className="student-task-all-todos-ul">
						{
							[1,2,3].map(
								() => (
									<li className="student-task-all-todos-li">
										<StudentTaskInprogressCard user={User}/>
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

export default StudentTaskInProgress
