import './App.scss';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import landing from './components/landing/landing';
import dashboard from './components/dashboard/dashboard';
import register from './components/register/register';
import login from './components/login/login';
import notfound from './components/404/404';

function App() {
	return (
		<div className="App">
			<Router>
				<Switch>
					<Route path="/" exact component={landing}/>
					<Route path="/dashboard" component={dashboard}/>
					<Route path="/register" component={register}/>
					<Route path="/login" component={login}/>
					<Route component={notfound}/>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
