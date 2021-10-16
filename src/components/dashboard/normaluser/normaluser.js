import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import "./normaluser.css"
import Normalusernav from './normalusernav/normalusernav'
import NormalUserProject from './normaluserproject/normaluserproject'
import NormalUserSocialMedia from './normalusersocialmedia/normalusersocialmedia'
import NormalUserTeam from './normaluserteam/normaluserteam'
import NormalUserTopNav from './normalusertopnav/normalusertopnav'

const Normaluser = () => {
	return (
		<div className="normal-user">
			<Router>
				<Normalusernav/>
				<div className="normal-user-right">
					<NormalUserTopNav/>
					<Switch>
						<Route path="/home" component={NormalUserSocialMedia}/>
						<Route path="/team" component={NormalUserTeam}/>
						<Route path="/project" component={NormalUserProject}/>
						<Route path="/messenger" component={NormalUserSocialMedia}/>
					</Switch>
				</div>
			</Router>
		</div>
	)
}

export default Normaluser
