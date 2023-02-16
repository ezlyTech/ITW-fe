import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const CreateUser = () => {
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
            history.push( '/users' );
            window.location.reload();
		}).catch(( err ) => {
			console.log( err.message );
		})
    }

    return (
            <div className='mt-5 p-5 card add-user_container'>
                <div className='d-flex justify-content-between flex-wrap align-items-start'>
                    <h3 className="fw-bold mb-3">Create User</h3>
                    <Link to='/users' ><i className="fa-solid fa-xmark fa-2xl"></i></Link>
                </div>

                <form onSubmit={ handleSubmit } >

                    <div className='form_container'>
                        <div className='form-inputs'>
                            <label className='form-label'>First Name</label>
                            <input 
                            className='form-control'
                            required 
                            value={ firstName }
                            onChange={ e => firstNameChange(e.target.value) } >
                            </input>
                            { firstName.length == 0 && validate && <span>Enter the name</span>}
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Last Name</label>
                            <input 
                            className='form-control' 
                            required 
                            value={ lastName } 
                            onChange={ e => lastNameChange(e.target.value) } ></input>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Profile</label>
                            <input 
                            className='form-control' 
                            required
                            value={ profile } 
                            onChange={ e => profileChange(e.target.value) } ></input>
                        </div>

                        <div className='form-inputs'>
                            <label className='form-label'>Email</label>
                            <input 
                            className='form-control' 
                            required 
                            value={ email } 
                            onChange={ e => emailChange(e.target.value) } ></input>
                        </div>
                    </div>

                    <div className='mt-4'>
                        <button className='btn btn-success' type='submit'>Save</button>
                    </div>
                </form>
            </div>
    );
}

export default CreateUser;