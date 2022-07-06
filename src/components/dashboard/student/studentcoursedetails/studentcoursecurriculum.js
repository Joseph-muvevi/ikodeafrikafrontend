import React from 'react'
import StudentCourseModules from './studentcoursemodules'

const StudentCourseCurriculum = () => {
	const moduleListItems = [1,2,3,4,5]

	return (
		<div className="student-course-curriculum">
			<div className="student-course-curriculum-content">
				<h3 className="student-course-curriculum-h3">
					Curiculum Details
				</h3>
				<hr/>
				<div className="student-course-curriculum-body">
					<div className="student-course-curriculum-body-modules">
						{
							moduleListItems.map((element) => (
								<StudentCourseModules 
									moduleNo={moduleListItems}
									element={element}
									/>
							))
						}
					</div>
				</div>
			</div>
		</div>
	)
}

export default StudentCourseCurriculum
