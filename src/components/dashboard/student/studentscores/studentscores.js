import React from 'react'
import CreateProjectModal from '../../../interfaces/createprojectmodal'
import ScoresTable from './scorestable'
import "./studentscores.css"

const MyScores = () => {
	return (
		<div className="student-courses">
			<div className="student-courses-content">
				<h3 className="student-courses-h3">
					My courses
				</h3>
				<div className="student-courses-p-and-filters">
					<p classNAme="student-courses-p">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</p>
				</div>
				<ScoresTable/>
				<CreateProjectModal/>
			</div>
		</div>
	)
}

export default MyScores
