import {Container, Table, Button} from 'reactstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

function Index() {
	const [ userData, userDataChange ] = useState( null );
	const history = useHistory();

	// **
	// Functions for 
	// each user details
	// **
	const LoadEdit = ( id ) => {

	};
	
	const LoadView = ( id ) => {
		history.push( '/view/' + id );
	};

	const DeleteUser = ( id ) => {
		
	};

	// **
	// Getting data 
	// from db.json
	// **
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
			<div className='mt-3 text-right'>
				<Link to="/users/create" color='primary'>+ Add User</Link>
			</div>

			<Table className='mt-3'>
				<thead>
					<tr>
						<th>ID</th>
						<th>Profile</th>
						<th>Email</th>
						<th>First Name</th>
						<th>Last Name</th>
						<th />
					</tr>
				</thead>

				<tbody>
					{ /* Displaying lists of users */ }
					{ userData &&
						userData.map ( user => (
							<tr key = { user.id }>
								<td>{ user.id }</td>
								<td>{ user.profile }</td>
								<td>{ user.email }</td>
								<td>{ user.firstName }</td>
								<td>{ user.lastName }</td>
								<td>
									<a onClick={() => { LoadEdit(user.id) }} className="btn" color='secondary'>Edit</a>
									<a onClick={() => { DeleteUser(user.id) }} className="btn" color='secondary'>Delete</a>
									<a onClick={() => { LoadView(user.id) }} className="btn" color='secondary'>View</a>
								</td>
							</tr>
						))
					}
				</tbody>
			</Table>
		</Container>
	);
}

export default Index;
