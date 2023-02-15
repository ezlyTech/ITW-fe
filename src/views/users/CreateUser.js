import React from 'react';
import {Container, Table, Button, Input} from 'reactstrap';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {

    const [ id, idChange ] = useState("");
    const [ firstName, firstNameChange ] = useState("");
    const [ lastName, lastNameChange ] = useState("");
    const [ email, emailChange ] = useState("");
    const [ profile, profileChange ] = useState("");
    const [ validate, valChange ] = useState(false);

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const userData = ({ firstName, lastName, email, profile });

		fetch( "http://localhost:3004/users", {
            method: "POST",
            headers: { "content-type" : "application/json" },
            body: JSON.stringify( userData )
        }).then(( data ) => {
			alert( "Saved Successfully!" );
            history( '/users' );
		}).catch(( err ) => {
			console.log( err.message );
		})
    }

    return (
		<Container>
            <div>
                <h1>Create User</h1>

                <form onSubmit={ handleSubmit } >
                    <div>
                        <label>ID</label>
                        <input value={ id } disabled="disabled" ></input>
                    </div>

                    <div>
                        <label>First Name</label>
                        <input 
                        required 
                        value={ firstName } 
                        onMouseDown={ e => valChange(true) } 
                        onChange={ e => firstNameChange(e.target.value) } >
                        </input>
                        { firstName.length == 0 && validate && <span>Enter the name</span>}
                    </div>

                    <div>
                        <label>Last Name</label>
                        <input required value={ lastName } onChange={ e => lastNameChange(e.target.value) } ></input>
                    </div>

                    <div>
                        <label>Profile</label>
                        <input value={ profile } onChange={ e => profileChange(e.target.value) } ></input>
                    </div>

                    <div>
                        <label>Email</label>
                        <input required value={ email } onChange={ e => emailChange(e.target.value) } ></input>
                    </div>

                    <div>
                        <button type='submit'>Save</button>
                        <Link to='/' >Back</Link>
                    </div>
                </form>
            </div>
		</Container>
    );
}

export default CreateUser;