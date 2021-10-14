import React from 'react'
import {NavLink} from "react-router-dom"
import "./navbar.css"

const Navbar = () => {
	return (
		<div className="nav">
			<div className="nav-content">
				<input type="checkbox" id="nav-check"/>
				<div className="nav-header">
					<div className="nav-title">
						Ikode<span className="afrika">Afrika</span>
					</div>
				</div>
				<div className="nav-btn">
					<label for="nav-check">
					<span></span>
					<span></span>
					<span></span>
					</label>
				</div>
				
				<div className="nav-links">
					<NavLink className="landing-navlinks" to="/" >Home</NavLink>
					<NavLink className="landing-navlinks" to="/blogs" >Blogs</NavLink>
					<NavLink className="landing-navlinks" to="/register" >Register</NavLink>
					<NavLink className="landing-navlinks" to="/login" >Login</NavLink>
				</div>
			</div>
		</div>
	)
}

export default Navbar
