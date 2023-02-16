import React from 'react';
import {Container, Card} from 'reactstrap';
import { useEffect, useState } from 'react';

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
						<a href='mailto:email@address.com'>email@address.com</a>
						<a className='mt-1' href='tel:+635552368'>(+63) 123-1234-1234</a>
					</address>
				</div>
			</Card>
		</Container>
	);
}

export default Index;
