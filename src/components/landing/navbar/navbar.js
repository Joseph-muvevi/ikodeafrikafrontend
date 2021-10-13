import React from 'react'
import "./navbar.css"

const Navbar = () => {
	return (
		<div className="navbar">
			<div className="navbar-content">
				<a href="#home" class="active">Home</a>
				<a href="#news">News</a>
				<a href="#contact">Contact</a>
				<a href="#about">About</a>
				<a href="#" class="icon" >
					<i class="fa fa-bars"></i>
				</a>
			</div>
		</div>
	)
}

export default Navbar
