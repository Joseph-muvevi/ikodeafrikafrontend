import React from 'react'
import "./normalusersocialmedia.css"
import icon from "../../../../assets/person3.jpg"

const Addpost = () => {
	return (
		<div className="add-post">
			<div className="add-post-content">
				<img
					src={icon}
					alt="username + icon"
					className="add-post-icon"
					/>
			<div className="add-post-content-inputs">
				<textarea 
					type="text"
					placeholder="what's new username variable"
					className="add-post-input-text"
					/>
				<input 
					type="file"
					placeholder="what's new username variable"
					className="add-post-input-file"
					/>
			</div>
			</div>
		</div>
	)
}

export default Addpost
