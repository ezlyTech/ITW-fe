const { useEffect, useState } = require("react");
const { useParams } = require("react-router-dom");

const ViewUser = () => {
    const { userID } = useParams();

    const [ userData, userDataChange ] = useState({});

    useEffect(() => {
        fetch( "http://localhost:3004/users/" + userID ).then(( data ) => {
			return data.json();
		}).then(( resp ) => {
			userDataChange( resp );
		}).catch(( err ) => {
			console.log( err.message );
		})
    }, [])

    return (
        <div>
            <h1>User Details</h1>
            { userData &&
                <p>The employee name is: { userData.firstName } ({ userData.id })</p>
            }
        </div>
    );
};

export default ViewUser;