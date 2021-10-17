import React from 'react'
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import notfound from '../404/404'
import Normaluser from './normaluser/normaluser'
import Student from './student/student'
import Tuitor from './tuitor/tuitor'

const dashboard = () => {
	return (
		<div className="dashboard">
			<Router>
				<Switch>
					<Route path="/user" extact component={Normaluser}/>
					<Route path="/tuitor" component={Tuitor}/>
					<Route path="/" component={Student}/>
					<Route component={notfound}/>
				</Switch>
			</Router>
		</div>
	)
}

export default dashboard
