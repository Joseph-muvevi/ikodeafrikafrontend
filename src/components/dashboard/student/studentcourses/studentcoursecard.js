import React from 'react'
import { faUsers, faComment, faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

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

			<div className="student-course-card-texts">
				<div className="student-course-card-text-header">
					The header here
				</div>
				<div className="student-course-card-text-icons">
					<div className="student-course-card-icon-group">
						<FontAwesomeIcon 
							className="student-course-card-icons"
							icon={faUsers}/>
						<p className="student-course-card-icon-p">
							300 Learners
						</p>
					</div>
					<div className="student-course-card-icon-group">
						<FontAwesomeIcon 
							className="student-course-card-icons"
							icon={faComment}/>
						<p className="student-course-card-icon-p">
							60 Comments
						</p>
					</div>
					<div className="student-course-card-icon-group">
						<FontAwesomeIcon 
							className="student-course-card-icons"
							icon={faHeart}/>
						<p className="student-course-card-icon-p">
							4000 Likes
						</p>
					</div>
				</div>
				<p className="student-course-card-text-details">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s...
				</p>
				<p className="student-course-card-call-to-action">
					More
				</p>
			</div>
		</div>
	)
}

export default StudentCourseCard
