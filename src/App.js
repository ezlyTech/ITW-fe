import 'styles/main.scss';
import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Page} from 'components/Pages';
import Home from 'views/home';
import Users from 'views/users';
import CreateUser from 'views/users/CreateUser';
import EditUser from 'views/users/EditUser';
import ViewUser from 'views/users/ViewUser';

function App() {
	return (
		<div className='app'>
			<Router>
				<Page>
					<Switch>
						<Route path='/users'>
							<Users />
						</Route>

						<Route path='/users/create' >
							<CreateUser />
						</Route>
						<Route path='/edit/:userid'>
							<EditUser />
						</Route>
						<Route path='/view/:userid'>
							<ViewUser />
						</Route>


						<Route path='/'>
							<Home />
						</Route>

						<Route path='*'>404</Route>
					</Switch>
				</Page>
			</Router>
		</div>
	);
}

export default App;
