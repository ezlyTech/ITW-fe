import React from 'react';
import { Container, Card } from 'reactstrap';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function Index() {
    const [ userData, userDataChange ] = useState({});

    useEffect(() => {
        fetch( "http://localhost:3004/main_user/" ).then(( data ) => {
			return data.json();
		}).then(( resp ) => {
			userDataChange( resp );
		}).catch(( err ) => {
			console.log( err.message );
		})
    }, []);


	return (
		<Container>
			<Card className='mt-5 p-5'>
				<div className='d-flex justify-content-between flex-wrap align-items-end'>
					<div>
						<p className='text-muted'>Welcome <span role="img" aria-label="hi">👋</span> </p>
						<h1 className='display-5 fw-bold'> { userData.firstName }</h1>
					</div>
					<address className='d-flex align-items-end flex-column'>
						<a href={"mailto:" + userData.email}>{ userData.email }</a>
						<a className='mt-1' href={"tel:" + userData.phone}>{ userData.phone }</a>
					</address>
				</div>

				<Link to='/users' className="mt-5">Go to users <i className="fa-solid fa-arrow-right-long"></i></Link>
			</Card>
		</Container>
	);
}

export default Index;
