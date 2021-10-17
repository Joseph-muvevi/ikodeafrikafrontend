import React from 'react'
import "./studenttasks.css"
import User from "../../../../assets/person2.jpg"
import StudentAllTodosCard from './studenttaskalltodoscard'


const StudentTaskAllTodos = () => {
	return (
		<div className="student-task-all-todos">
			<div className="student-task-all-todos-content">
				<div className="student-task-all-todos-topic">
					<h3 className="student-task-all-todos-h3">
						all todos (5)
					</h3>
				</div>
				<div className="student-task-all-todos-main">
					<ul className="student-task-all-todos-ul">
						{
							[1,2,3,4,5].map(
								() => (
									<li className="student-task-all-todos-li">
										<StudentAllTodosCard user={User}/>
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

export default StudentTaskAllTodos
