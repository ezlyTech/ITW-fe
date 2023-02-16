import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
        <div>
            <h1>User Details</h1>
            { userData && 
                <div>
                    <p>The employee name is: { userData.firstName } { userData.lastName } ({ userData.id })</p> 
                    <Link to='/users' >Back</Link>
                </div>
            }
        </div>
    );
};

export default ViewUser;