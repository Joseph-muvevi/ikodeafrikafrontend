import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import StudentProject from './projects/project'
import "./student.css"
import StudentAssignment from './studentassignment/studentassignment'
import StudentCourses from './studentcourses/studentcourses'
import StudentHome from './studenthome/studenthome'
import MyScores from './studentscores/studentscores'
import StudentSidenav from './studentsidenav/studentsidenav'
import StudentTasks from './studenttasks/studenttasks'
import StudentTopnav from './studenttopnav/studenttopnav'

const Student = () => {
	return (
		<div className="student">
			<Router>
				<StudentSidenav/>
				<div className="student-right">
					<StudentTopnav/>
					<Switch>
						<Route path="/me" component={StudentHome}/>
						<Route path="/my-courses" component={StudentCourses}/>
						<Route path="/my-projects" component={StudentProject}/>
						<Route path="/my-courses" component={StudentCourses}/>
						<Route path="/my-task" component={StudentTasks}/>
						<Route path="/my-assignment" component={StudentAssignment}/>
						<Route path="/my-scores" component={MyScores}/>
						<Route path="/" exact component={MyScores}/>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default Student
