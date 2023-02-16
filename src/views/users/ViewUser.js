import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "reactstrap";

const ViewUser = () => {
    const { userid } = useParams();
    const [ userData, userDataChange ] = useState({});

    useEffect(() => {
        fetch( "http://localhost:3004/users/" + userid ).then(( data ) => {
			return data.json();
		}).then(( resp ) => {
			userDataChange( resp );
		}).catch(( err ) => {
			console.log( err.message );
		})
    }, []);

    return (
        <div className="mt-5 p-5 card user-details_container">
            <div className="d-flex justify-content-between flex-wrap align-items-start">
                <h3 className="fw-bold mb-3">User Details</h3>
                <Link to='/users' ><i class="fa-solid fa-xmark fa-2xl"></i></Link>
            </div>
            { userData && 
                <div>
                    <p className="fs-6">Full Name: <strong>{ userData.firstName } { userData.lastName }</strong></p> 
                    <p className="fs-6">Profile: <strong>{ userData.profile }</strong></p> 
                    <p className="fs-6">Email: <strong>{ userData.email }</strong></p> 
                </div>
            }
        </div>

    );
};

export default ViewUser;