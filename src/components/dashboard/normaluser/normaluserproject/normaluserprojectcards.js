import { faFire, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import "./normaluserproject.css"

const NormalUserProjectCards = ({content}) => {
	return (
		<div className="normal-user-project-card-item">
			<div className="normal-user-project-card-item-top">
				<h3 className="normal-user-project-card-item-top">
					Topic one
				</h3>
				<FontAwesomeIcon
					icon={faFire}
				/>
			</div>
			<div className="normal-user-project-card-item-middle">
				{content}
			</div>
			<div className="normal-user-project-card-item-bottom">
				<div className="normal-user-project-card-item-bottom-status">
					in progress 
					{/* completed */}
				</div>
				<div className="normal-user-project-card-item-bottom-colaborators">
					{
						[1, 2, 3, 4].map(() => (
							<FontAwesomeIcon 
								icon={faUser}
								className="normal-user-project-card-item-bottom-fontawesome"
								/>
						))
					}
				</div>
			</div>
		</div>
	)
}

export default NormalUserProjectCards
