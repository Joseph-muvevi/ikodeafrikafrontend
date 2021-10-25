import React from 'react'
import StudentCourseDetailsTop from './studentcousedetailsbcard'

const StudentCourseDetails = () => {
	return (
		<div className="student-course-details">
			<div className="student-course-details-content">
				<StudentCourseDetailsTop/>
				<div className="student-course-details-description">
					description
				</div>
				<div className="student-course-details-curriculum">
					curriculum
				</div>
				<div className="student-course-details-faculty">
					faculty cards list
				</div>
				<div className="student-course-details-reviews">
					Reviews card
				</div>
			</div>
		</div>
	)
}

export default StudentCourseDetails
