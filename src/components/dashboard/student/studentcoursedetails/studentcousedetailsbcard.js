import React from 'react'
import "./studentcoursedetails.css"
import image from "../../../../assets/person5.jpg"
import person from "../../../../assets/person4.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faClock, faEnvelope, faGlobeAfrica, faHeart, faLanguage, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

const StudentCourseDetailsTop = () => {
	return (
		<div className="student-course-details-top">
			<div className="student-sourse-details-left">
				<div className="student-course-details-top">
					<img src={image} alt="course details" className="student-course-video"/>
				</div>
				<div className="student-course-details-top-text">
					<h3 className="student-course-details-top-header">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					</h3>
					<div className="student-course-details-bottom">
						<div className="student-course-details-bottom-items">
							<FontAwesomeIcon 
								className="student-course-details-bottom-items-icons"
								icon={faCalendarAlt}/>
							<p className="student-course-details-bottom-items-p">
								started on
							</p>
						</div>
						<div className="student-course-details-bottom-items">
							<FontAwesomeIcon 
								className="student-course-details-bottom-items-icons"
								icon={faClock}/>
							<p className="student-course-details-bottom-items-p">
								70 hours
							</p>
						</div>
						<div className="student-course-details-bottom-items">
							<FontAwesomeIcon 
								className="student-course-details-bottom-items-icons"
								icon={faLanguage}/>
							<p className="student-course-details-bottom-items-p">
								languages
							</p>
						</div>
						<div className="student-course-details-bottom-items">
							<FontAwesomeIcon 
								className="student-course-details-bottom-items-icons"
								icon={faHeart}/>
							<p className="student-course-details-bottom-items-p">
								likes
							</p>
						</div>
					</div>
				</div>
			</div>
			<div className="student-course-details-right">
				<div className="student-course-details-right-info">
					<div className="student-course-details-enroll">
						<h3 className="student-course-details-enroll-price">240$</h3>
						<div className="student-course-details-enroll-sub-text">
							<FontAwesomeIcon 
								className="student-course-details-bottom-items-icons"
								icon={faClock}/>
							<p className="student-course-details-bottom-items-icons-p">
								Limmited time offer
							</p>
						</div>
						<button className="student-course-details-enroll-button-A">
							Enroll now
						</button>
						<button className="student-course-details-enroll-button-B">
							Free Trial
						</button>
					</div>
					<div className="student-course-details-lec-card">
						<div className="student-course-details-lec-card-top">
							<div className="student-course-details-lec-card-top-left">
								<img className="student-course-details-lec-card-top-left-img"
									src={person}
									alt="person + icon"
								/>
							</div>
							<div className="student-course-details-lec-card-top-right">
								<h4 className="student-course-details-lec-card-top-h4">
									Tutor's name
								</h4>
								<p className="student-course-details-lec-card-top-h4">
									Some more details here
								</p>
							</div>
						</div>
						<hr/>
						<div className="student-course-details-lec-card-middle">
							<div className="student-course-details-lec-card-middle-items">
								<FontAwesomeIcon 
									className="student-course-details-lec-card-middle-icons"
									icon={faEnvelope}/>
								email@2mail.com
							</div>
							<div className="student-course-details-lec-card-middle-items">
								<FontAwesomeIcon 
									className="student-course-details-lec-card-middle-icons"
									icon={faPhoneAlt}/>
								+254 700 000 000
							</div>
							<div className="student-course-details-lec-card-middle-items">
								<FontAwesomeIcon 
									className="student-course-details-lec-card-middle-icons"
									icon={faGithub}/>
								github.com
							</div>
							<div className="student-course-details-lec-card-middle-items">
								<FontAwesomeIcon 
									className="student-course-details-lec-card-middle-icons"
									icon={faGlobeAfrica}/>
								mytutorswebsite.com
							</div>
						</div>
						<div className="student-course-details-lec-card-bottom">
							socials
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default StudentCourseDetailsTop
