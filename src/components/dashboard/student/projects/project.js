import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./project.css"
import ProjectCard from './projectcard'

const StudentProject = () => {
	return (
		<div className="student-project">
			<div className="student-project-content">
				<h3 className="student-project-h3">
					My project
				</h3>
				<div className="student-project-p-and-filters">
					<div className="student-project-p">
						<FontAwesomeIcon
							icon={faPlus}
							className="font-awesome-icon-add-project"
						/>
						<p className="create-project-p">
							create a project
						</p>
					</div>
					<div className="student-project-filter">
						<p className="student-project-filter-all">
							all
						</p>
						
						<p className="student-project-filter-completed">
							completed
						</p>
						
						<p className="student-project-filter-ongoing">
							ongoing
						</p>
					</div>
				</div>
				<div className="student-project-ul">
					{
						[1,2,3,4,5,6,7,8,9,10].map(
							() => (
								<li className="student-course-list">
									<ProjectCard/>
								</li>
							)
						)
					}
				</div>
			</div>
		</div>
	)
}

export default StudentProject
