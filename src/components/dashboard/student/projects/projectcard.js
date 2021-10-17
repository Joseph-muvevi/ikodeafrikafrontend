import React from 'react'
import "./project.css"

const ProjectCard = () => {
	return (
		<div className="student-project-card">
			<h3 className="student-project-card-header">
				Lesson about quantum mechanics and quantum entangement
			</h3>
			<p className="student-project-card-status-completed">
				completed
			</p>
			<p className="student-project-card-p">
				Lorem Ipsum is simply dummy text of the printing and typesetting industry.
				Lorem Ipsum has been the industry's standard dummy text ever since the
				1500s, when an unknown printer took a galley of type and scrambled it to
				make a type specimen book.
			</p>
		</div>
	)
}

export default ProjectCard