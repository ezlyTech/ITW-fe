import { Container, Table } from 'reactstrap';
import { Switch, Route, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useRouteMatch } from 'react-router-dom';

import CreateUser from './CreateUser';
import ViewUser from './ViewUser';
import EditUser from './EditUser';

function Index() {
	const [ userData, userDataChange ] = useState( null );
	const history = useHistory();
	const { path, url } = useRouteMatch();

	const LoadEdit = ( id ) => {
		history.push( '/users/edit/' + id );
	};
	
	const LoadView = ( id ) => {
		history.push( '/users/view/' + id );
	};

	const DeleteUser = ( id ) => {
		if ( window.confirm( 'Do you want to remove?' ) ) {
            fetch( "http://localhost:3004/users/" + id, {
                method: "DELETE"
            }).then(( res ) => {
                // alert( 'Removed successfully.' )
                window.location.reload();
            }).catch(( err ) => {
                console.log( err.message );
            })
        }
	};

	useEffect(() => {
		fetch( "http://localhost:3004/users" ).then(( data ) => {
			return data.json();
		}).then(( resp ) => {
			userDataChange( resp );
		}).catch(( err ) => {
			console.log( err.message );
		})
	}, []);



	return (
		<Container>
			<Switch>
				<Route path={ `${path}/create` } >
					<CreateUser />
				</Route>
				<Route path={ `${path}/view/:userid` }>
					<ViewUser />
				</Route>
				<Route path={ `${path}/edit/:userid` }>
					<EditUser />
				</Route>
			</Switch>
			
			<div className='mt-5 p-5 card table-responsive'>
				<div className='d-flex justify-content-between flex-wrap align-items-end'>
					<h1 className='display-6 fw-bold'>Users</h1>
					<Link to={ `${url}/create` } className="btn btn-primary add-user_btn fw-bold fs-6">+ Add User</Link>
				</div>

				<Table className='mt-4 table table-hover'>
					<thead>
						<tr>
							<th>ID</th>
							<th>Profile</th>
							<th>Email</th>
							<th>First Name</th>
							<th>Last Name</th>
							<th>Actions</th>
						</tr>
					</thead>

					<tbody>
						{ userData &&
							userData.map ( user => (
								<tr key = { user.id }>
									<td>{ user.id }</td>
									<td>{ user.profile }</td>
									<td>{ user.email }</td>
									<td>{ user.firstName }</td>
									<td>{ user.lastName }</td>
									<td className=''>
										<a onClick={() => { LoadEdit(user.id) }} >
											<i className="fa-icon fa-solid fa-pen"></i>
										</a>
										<a onClick={() => { DeleteUser(user.id) }} className="ms-3">
											<i className="fa-icon fa-solid fa-trash"></i>
										</a>
										<a onClick={() => { LoadView(user.id) }} className="ms-3">
											<i className="fa-icon fa-solid fa-eye"></i>
										</a>
									</td>
								</tr>
							))
						}
					</tbody>
				</Table>
			</div>
		</Container>
	);
}

export default Index;
