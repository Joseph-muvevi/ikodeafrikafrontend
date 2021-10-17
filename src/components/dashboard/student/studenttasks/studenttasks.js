import React from 'react';
import StudentTaskAllTodos from './studenttaskalltodos';
import StudentTaskDone from './studenttaskdone';
import StudentTaskInProgress from './studenttaskinprogress';
import "./studenttasks.css"

const StudentTasks = () => {
	return (
		<div className="student-project">
			<div className="student-project-content">
				<h3 className="student-project-h3">
					My tasks
				</h3>
				<div className="student-project-p-and-filters">
					<div className="student-project-p">
						<p className="create-project-p">
							create a todo 
						</p>
					</div>
				</div>
				<div className="student-project-ul">
					<StudentTaskAllTodos/>
					<StudentTaskInProgress/>
					<StudentTaskDone/>
				</div>
			</div>
		</div>
	)
}

export default StudentTasks
