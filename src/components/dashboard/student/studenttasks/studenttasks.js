import React,{useState} from 'react';
import TaskModal from '../../../interfaces/taskmodal';
import StudentTaskAllTodos from './studenttaskalltodos';
import StudentTaskDone from './studenttaskdone';
import StudentTaskInProgress from './studenttaskinprogress';
import "./studenttasks.css"

const StudentTasks = () => {

	const [taskModal, settaskModal] = useState(false)

	return (
		<div className="student-project">
			<div className="student-project-content">
				<h3 className="student-project-h3">
					My tasks
				</h3>
				<div onClick={() => settaskModal(!taskModal)} className="student-project-p-and-filters">
					<button className="student-project-p">
						create a todo 
					</button>
				</div>
				<div className="student-project-ul">
					{
						taskModal === true ? <TaskModal/> : null
					}
					<StudentTaskAllTodos/>
					<StudentTaskInProgress/>
					<StudentTaskDone/>
				</div>
			</div>
		</div>
	)
}

export default StudentTasks
