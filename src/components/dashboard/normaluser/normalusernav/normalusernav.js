import React from 'react'
import { NavLink } from 'react-router-dom'
import "./normalusernav.css"
import Image from "../../../../assets/desktop3.jpg"

const Normalusernav = () => {
	return (
		<div className="normal-user-side-nav">
			<div className="normal-user-side-nav-content">
				<div className="normal-user-side-nav-content-top">
					<img className="normal-user-side-nav-img" 
						alt="will be filled with alt from the database"
						src={Image}
						/>
					<h4 className="normal-user-side-nav-top-h4">
						USER NAME HERE
					</h4>
				</div>
				<hr className="side-nav-hr"/>
				<div className="normal-user-side-nav-content-middle">
					<ul className="normal-user-side-nav-content-middle-ul">
						{
							[
								"home",
								"project",
								"team",
								"messenger"

							].map(element => (
								<NavLink to={`/${element}`} className="normal-user-side-nav-content-middle-li">
									{element}
								</NavLink>
							))
						}
					</ul>
				</div>
				<div className="normal-user-side-nav-content-bottom">
					
				</div>
			</div>
		</div>
	)
}

export default Normalusernav
