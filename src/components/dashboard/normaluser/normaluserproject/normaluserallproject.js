import React from 'react'
import "./normaluserproject.css"
import NormalUserProjectCards from './normaluserprojectcards'

const NormalUserAllProject = () => {
	const list = [
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible",
		"lorem ipsum more and more text over and over, i am tryng to write as much words as possible"
	]
	return (
		<div className="all-user-project">
			<div className="all-user-project-content">
				<div className="all-user-project-top">
					<h3 className="all-user-project-h3">
						My project
					</h3>
				</div>
				<div className="all-user-project-main">
					<ul className="all-user-project-cards">
						{
						   list.map(element => (
								<li>
									<NormalUserProjectCards 
										content= {element}
									/>
								</li>
						   ))
						}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default NormalUserAllProject
