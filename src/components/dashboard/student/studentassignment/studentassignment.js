import React from 'react'
import "./studentassignment.css"
import StudentAssignmentCard from './studentassignmentcard'
import User from "../../../../assets/person3.jpg"

const StudentAssignments = () => {
	return (
		<div className="student-assignment">
			<div className="student-assignment-content">
				<h3 className="student-assignment-h3">
					My assignments
				</h3>
				<div className="student-assignment-p-and-filters">
					<div className="student-assignment-p">
						
						<p className="create-assignment-p">
							 all assignment
						</p>
					</div>
					<div className="student-assignment-filter">
						<p className="student-assignment-filter-all">
							all
						</p>
						
						<p className="student-assignment-filter-completed">
							completed
						</p>
						
						<p className="student-assignment-filter-ongoing">
							ongoing
						</p>
					</div>
				</div>
				<div className="student-assignment-ul">
					{
						[1,2,3,4,5,6,7,8,9,10].map(
							() => (
								<li className="student-assignment-list">
									<StudentAssignmentCard user={User}/>
								</li>
							)
						)
					}
				</div>
			</div>
		</div>
	)
}

export default StudentAssignments
