import React from 'react'
import FacultyCardList from './facultycardlist'
import StudentCourseCurriculum from './studentcoursecurriculum'
import StudentCourseDescription from './studentcoursedescription'
import StudentCourseDetailsTop from './studentcousedetailsbcard'

const StudentCourseDetails = () => {
	return (
		<div className="student-course-details">
			<div className="student-course-details-content">
				<StudentCourseDetailsTop/>
				<StudentCourseDescription/>
				<StudentCourseCurriculum/>
				<FacultyCardList/>
				<div className="student-course-details-reviews">
					Reviews card
				</div>
			</div>
		</div>
	)
}

export default StudentCourseDetails
