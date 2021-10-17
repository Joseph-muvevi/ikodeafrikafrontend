import React from 'react'

const StudentCourseCard = ({cardImage}) => {
	return (
		<div className="student-course-card">
			<div className="student-course-card-image">
				<img 
					className="student-course-card-img"
					src={cardImage}
					alt="product description from the database"
				/>
			</div>

			<h3 className="student-course-card-header">
				Lesson about quantum mechanics and quantum entangement
			</h3>

			progress
		</div>
	)
}

export default StudentCourseCard
