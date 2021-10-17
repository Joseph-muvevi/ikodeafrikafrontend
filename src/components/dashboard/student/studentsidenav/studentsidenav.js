import React from 'react'
import "./studentsidenav.css"
import {NavLink} from "react-router-dom"
import Logo from "../../../../assets/pnglogowords.png"
import Person from "../../../../assets/person5.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAward, faChartPie, faGraduationCap, faLaptopCode, faSignOutAlt, faTasks } from '@fortawesome/free-solid-svg-icons'

const StudentSidenav = () => {
	return (
		<div className="student-side-nav">
			<div className="student-side-nav-content">
				<div className="student-side-nav-top">
					<img
						className="student-side-nav-logo" 
						src={Logo} 
						alt="logo"
						/>
				</div>
				<div className="student-side-nav-middle">
					<img
						className="student-side-nav-image" 
						src={Person} 
						alt="alt"
						/>
					<h4 className="student-side-nav-name">
						joseph mutua
					</h4>
				</div>
				<div className="student-side-nav-bottom">
					<ul className="student-side-nav-middle-ul">
						<NavLink to="/me" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faChartPie}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								dashboard
							</p>
						</NavLink>
						<NavLink to="/my-courses" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faGraduationCap}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								courses
							</p>
						</NavLink>
						<NavLink to="/my-projects" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faLaptopCode}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								project
							</p>
						</NavLink>
						<NavLink to="/my-assignmen" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faChartPie}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								assignments
							</p>
						</NavLink>
						<NavLink to="/my-task" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faTasks}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								tasks
							</p>
						</NavLink>
						<NavLink to="/my-scores" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faAward}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								scores
							</p>
						</NavLink>
						<NavLink to="/" className="student-side-nav-middle-li">
							<FontAwesomeIcon
								icon={faSignOutAlt}
								className="student-side-nav-fontawesome-icon"
							/>
							<p className ="student-side-nav-p">
								signout
							</p>
						</NavLink>
					</ul>
				</div>
			</div>
		</div>
	)
}

export default StudentSidenav
