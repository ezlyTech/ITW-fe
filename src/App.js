import 'styles/main.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Page} from 'components/Pages';
import Home from 'views/home';
import Users from 'views/users';
import CreateUser from 'views/users/CreateUser';
import EditUser from 'views/users/EditUser';

function App() {
	return (
		<div className='app'>
			<Router>
				<Page>
					<Switch>
						<Route exact path='/'>
							<Home />
						</Route>
						<Route path='/users'>
							<Users />
						</Route>

						<Route path='/create' >
							<CreateUser />
						</Route>
						<Route path='/users/edit/:userid'>
							<EditUser />
						</Route>

						<Route path='*'>404</Route>
					</Switch>
				</Page>
			</Router>
		</div>
	);
}

export default App;
