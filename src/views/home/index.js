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
				<h1 className='display-4'> { userData.firstName } </h1>
				<address>
					<a href='mailto:email@address.com'>email@address.com</a>
					<br />
					<a href='tel:+635552368'>(+63) 123-1234-1234</a>
				</address>
			</Card>
		</Container>
	);
}

export default Index;
