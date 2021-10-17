import React from 'react'
import "./studentassignmentdetail.css"
import StudentAssignmentDetailCard from './studentassignmentdetailcard'

const StudentAssignmentDetail = () => {
	return (
		<div className="student-assignment-detail">
			<div className="student-assignment-detail-content">
				<h3 className="student-assignment-detail-h3">
					My assignment-detail
				</h3>
				<div className="student-assignment-detail-p-and-filters">
					<div className="student-assignment-detail-p">
						<p className="create-assignment-detail-p">
							assign ID
						</p>
					</div>
					<div className="student-assignment-detail-filter">
						<p className="student-assignment-detail-filter-all">
							all
						</p>
						
						<p className="student-assignment-detail-filter-completed">
							completed
						</p>
						
						<p className="student-assignment-detail-filter-ongoing">
							ongoing
						</p>
					</div>
				</div>
				<div className="student-assignment-detail-ul">
					{
						[1,2,3,4,5,6,7,8,9,10].map(
							() => (
								<li className="student-course-list">
									<StudentAssignmentDetailCard/>
								</li>
							)
						)
					}
				</div>
			</div>
		</div>
	)
}

export default StudentAssignmentDetail
