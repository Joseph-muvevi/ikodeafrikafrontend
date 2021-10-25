import React from 'react'
import "./studentassignmentdetail.css"
import Tutor from "../../../../assets/person3.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendarAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons'

const StudentAssignmentDetailCard = () => {

	return (
		<div className="student-assignment-detail-card">
			<div className="student-assignment-detail-card-content">
				<div className="student-assignment-detail-card-top">
					<div className="student-assignment-detail-card-top-inputs">
						<input
							className="card-checkbox"
							type="checkbox"/>
						<p className="student-assignment-detail-card-top-p">
							Mark as read
						</p>
					</div>
					<FontAwesomeIcon
						icon={faEllipsisV}
						className="font-awesome-ellipsis-v"
						/>
						
				</div>
				<div className="student-assignment-detail-card-header">
					<h4 className="student-assignment-detail-card-header-h4">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</h4>
					<div className="student-assignment-detail-card-header-info">
						<div className="student-assignment-detail-card-header-info-left">
							<p className="student-assignment-detail-card-header-info-p">
								tutor's name
							</p>
							<div className="student-assignment-detail-card-header-info-bottom">
								<div className="student-assignment-detail-card-header-info-bottom-content">
									<img 
										className="student-assignment-detail-card-header-img"
										src={Tutor}
										alt="tuitor's name + icon"
									/>
									<p className="student-assignment-detail-card-header-bottom-p">
										joseph muvevi
									</p>
									
								</div>
							</div>
						</div>
						<div className="student-assignment-detail-card-header-info-left">
							<p className="student-assignment-detail-card-header-info-p">
								due date
							</p>
							<div className="student-assignment-detail-card-header-info-bottom">
								<div className="student-assignment-detail-card-header-info-bottom-content">
									<FontAwesomeIcon 
										className="student-assignment-detail-card-header-fontawesome"
										icon={faCalendarAlt}
									/>
									<p className="student-assignment-detail-card-header-bottom-p">
										joseph muvevi
									</p>
								</div>

							</div>
						</div>
					</div>
				</div>
				<div className="student-assignment-detail-card-middle">
					<h4 className="student-assignment-detail-card-middle-overview">
						Overview
					</h4>
					<p className="student-assignment-detail-card-middle-p">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry.
						Lorem Ipsum has been the industry's standard dummy text ever since the
						1500s, when an unknown printer took a galley of type and scrambled it to
						make a type specimen book. It has survived not only five centuries, but
						also the leap into electronic typesetting, remaining essentially
						unchanged. It was popularised in the 1960s with the release of Letraset
						sheets containing Lorem Ipsum passages, and more recently with desktop
						publishing software like Aldus PageMaker including versions of Lorem Ipsum.
					</p>
				</div>
				<div className="student-assignment-detail-card-bottom">
					<h4 className="student-assignment-detail-card-middle-overview">
						procedure/steps
					</h4>
					<p className="student-assignment-detail-card-middle-p">
						{
							[
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
								"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
							].map(element => (
								<div className="mapped-checkbox-group">
									<input
										className="card-checkbox"
										type="checkbox"/>
										<p className="mapped-checkbox-group-p">
											{element}
										</p>
								</div>
							))
						}
					</p>

				</div>
			</div>
		</div>
	)
}

export default StudentAssignmentDetailCard
