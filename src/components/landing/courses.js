import React from 'react'
import "./landing.css"

const Courses = () => {
	return (
		<div className="landing-courses">
			<div className="landing-courses-top">
				<h3 className="landing-courses-top-h3">
					Courses offered
				</h3>
				<p className="landing-courses-top-p">
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
					Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
				</p>
				<hr className="landing-hr"/>
			</div>
			<div className="landing-courses-bottom">
				<div className="landing-courses-cards">
					<div className="box landing-courses-card-A">
						<p className="landing-courses-card-p">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						</p>
					</div>
					<div className="box landing-courses-card-B">
						<p className="landing-courses-card-p">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						</p>
					</div>
					<div className="landing-courses-card-C">
						<p className="landing-courses-card-p">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						</p>
					</div>
					<div className="landing-courses-card-D">
						<p className="landing-courses-card-p">
							Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
						</p>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Courses
