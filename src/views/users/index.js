import React from 'react';
import {Container, Table, Button} from 'reactstrap';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
	const [ userData, userDataChange ] = useState( null );

	// Getting data from db.json
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
				<Link to="/create" color='primary'>+ Add User</Link>
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
									<a className="btn" color='secondary'>Edit</a>
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
