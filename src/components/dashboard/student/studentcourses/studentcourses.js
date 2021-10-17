import { faFilter } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import StudentCourseCard from './studentcoursecard'
import "./studentcourses.css"
import Desk from "../../../../assets/tech3.jpg"

const StudentCourses = () => {
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
					<div className="student-courses-filter">
						<p className="student-courses-filter-p">
							Sort by 
						</p>
						<FontAwesomeIcon 
							icon={faFilter}
							className="student-courses-fiter-fontwesome"
						/>
					</div>
				</div>
				<div className="student-courses-ul">
					{
						[1,2,3,4,5,6,7,8,9,10].map(
							() => (
								<li className="student-course-list">
									<StudentCourseCard cardImage={Desk}/>
								</li>
							)
						)
					}
				</div>
			</div>
		</div>
	)
}

export default StudentCourses
