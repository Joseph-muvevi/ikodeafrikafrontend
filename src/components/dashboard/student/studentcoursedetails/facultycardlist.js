import React from 'react'
import facultyImg from "../../../../assets/person1.jpg"
import SocialMediaButtons from '../../../interfaces/socialmediabuttons'

const FacultyCardList = () => {

	// links to each individual soial media will be declared here ant sent as a prop to Social Media Buttons Components

	return (
		<div className="faculty-card-list">
			<div className="faculty-card-list-content">
				<div className="faculty-card-list-top">
					<img className="faculty-card-list-top-img" 
						src={facultyImg}
						alt="faculty name + icon"
					/>
					<div className="faculty-card-list-top-right">
						<h4 className="faculty-card-list-top-right-h4">
							Tutor's name
						</h4>
						<p className="faculty-card-list-top-right-h4">
							Some secondary info here
						</p>
					</div>
				</div>
				<p className="faculty-card-list-center">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry.
					Lorem Ipsum has been the industry's standard dummy text ever since the
					1500s, when an unknown printer took a galley of type and scrambled it to
					make a type specimen book. It has survived not only five centuries, but
					also the leap into electronic typesetting, remaining essentially
					unchanged. 
				</p>
				<SocialMediaButtons/>
			</div>
		</div>
	)
}

export default FacultyCardList
