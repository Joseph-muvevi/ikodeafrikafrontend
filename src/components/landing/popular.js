import { faLaptop } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./landing.scss"

const Welcome = () => {
	return (
		<div className="welcome">
			<div className="welcome-content">
				<div className="welcome-left">
					<h3 className="welcome-left-h3-main">
						Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					</h3>
					<p className="welcome-left-p">
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
				<div className="welcome-right">
					<div className="welcome-right-cards">
						<div className="welcome-right-cards-row">
							<div className="welcome-card-item">
								<FontAwesomeIcon 
									className="welcome-fontawesome"
									icon={faLaptop}
									/>
								<h3 className="welcome-left-h3">
									Web Apps
								</h3>
								<p className="welcome-right-p">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the
									1500s, when an unknown printer took a galley of type and scrambled it to
									make a type specimen book.
								</p>
							</div>
								
							<div className="welcome-card-item-dropped">
								<FontAwesomeIcon 
									className="welcome-fontawesome"
									icon={faLaptop}
									/>
								<h3 className="welcome-left-h3">
									Web Apps
								</h3>
								<p className="welcome-right-p">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the
									1500s, when an unknown printer took a galley of type and scrambled it to
									make a type specimen book.
								</p>
							</div>
						</div>
						<div className="welcome-right-cards-row">
							<div className="welcome-card-item">
								<FontAwesomeIcon 
									className="welcome-fontawesome"
									icon={faLaptop}
									/>
								<h3 className="welcome-left-h3">
									Web Apps
								</h3>
								<p className="welcome-right-p">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the
									1500s, when an unknown printer took a galley of type and scrambled it to
									make a type specimen book.
								</p>
							</div>
								
							<div className="welcome-card-item-dropped">
								<FontAwesomeIcon 
									className="welcome-fontawesome"
									icon={faLaptop}
									/>
								<h3 className="welcome-left-h3">
									Web Apps
								</h3>
								<p className="welcome-right-p">
									Lorem Ipsum is simply dummy text of the printing and typesetting industry.
									Lorem Ipsum has been the industry's standard dummy text ever since the
									1500s, when an unknown printer took a galley of type and scrambled it to
									make a type specimen book.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Welcome
