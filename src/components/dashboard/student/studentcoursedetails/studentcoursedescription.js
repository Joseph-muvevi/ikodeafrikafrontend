import React from 'react'
import "./studentcoursedetails.css"

const StudentCourseDescription = () => {
	return (
		<div className="student-course-description">
			<div className="student-course-description-content">
				<h3 className="student-course-description-header">
					The Description of the course here
				</h3>
				<hr/>
				<p className="student-course-description-p">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. It was popularised in the 1960s with the release of Letraset
					sheets containing Lorem Ipsum passages, and more recently with desktop
					publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				</p>
				<h3 className="student-course-description-header">
					Curricullum
				</h3>
				<hr/>
				<ul className="student-course-description-ul">
					{
						[1,2,3,4,5,6,7].map(() => (
							<li className="student-course-description-li">
								We'll Display the list of headers here for quick information capture at a glance
							</li>
						))
					}
				</ul>
			</div>
		</div>
	)
}

export default StudentCourseDescription
