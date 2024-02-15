// DashboardA.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Edit from "./Edit";
import NavBar from "./NavBar";

const DashboardA = () => {
  const [error, setError] = useState('');
  const [allUserData, setAllUserData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
  const [editing, setEditing] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchAllUserData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch all user data.');
        }

        const data = await response.json();
        if (!Array.isArray(data)) {
          throw new Error('Invalid data format for all user data.');
        }

        console.log('Fetched all user data:', data);
        setAllUserData(data);
      } catch (error) {
        console.error('Error fetching all user data:', error);
        setError('An error occurred while fetching all user data.');
      }
    };

    fetchAllUserData();
  }, []);

  const handleUserNameClick = async (userId) => {
    navigate(`/view/${userId}`);
  };

  const handleEditClick = (userId) => {
    navigate(`/edit/${userId}`);
    setEditing(true);
    
  };

  const handleSaveChanges = () => {
    setEditing(false);
    
  };

  return (<>
   
      <NavBar/>
    
    <div className="container mt-5">
      
      {editing ? (
        <Edit user={selectedUserData} onSave={handleSaveChanges} />
      ) : (
        <>
          <div className="p-5">
            <h2 className="mb-4">Welcome to Dashboard:</h2>
            <div className="mt-3">
              <h3 className="mb-3">All Users:</h3>
              <table className="table table-bordered table-striped table-responsive">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Username</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {allUserData.map((user) => (
                    <React.Fragment key={user.id}>
                      <tr>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>
                          <button
                            className="btn btn-primary"
                            onClick={() => handleUserNameClick(user.id)}
                          >
                            View Details
                          </button>
                          <button
                            className="btn btn-warning ms-2"
                            onClick={() => handleEditClick(user.id)}
                          >
                            Edit
                          </button>
                        </td>
                      </tr>
                      {selectedUserId === user.id && selectedUserData && (
                        <tr>
                          <td colSpan="4">
                            <div className="mt-3">
                              <p>ID: {selectedUserData.id}</p>
                              <p>Name: {selectedUserData.name}</p>

                            </div>
                            {error && <p className="text-danger">Error: {error}</p>}
                          </td>
                        </tr>
                      )}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </>
      )}
    </div>
 </> );
};

export default DashboardA;
