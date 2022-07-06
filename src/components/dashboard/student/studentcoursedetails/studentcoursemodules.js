import React from 'react'

const StudentCourseModules = ({moduleNo, element}) => {
	const moduleLists = [1,2,3,4,5]

	return (
		<div className="student-course-modules">
			<h3 className="student-course-module-header">
				Header {moduleNo.indexOf(element) + 1} : Some info here from the DB
			</h3>
			<ul className="student-course-module-ul">
				{
					moduleLists.map((moduleItem) => (
						<>
							<li className="student-course-module-li">
								Lesson {moduleNo.indexOf(moduleItem) + 1}.
								<p className="student-course-module-li-p">
									Some content information here
								</p>
							</li> <hr className="hr-thin"/>
						</>
					))
				}
			</ul>
		</div>
	)
}

export default StudentCourseModules
