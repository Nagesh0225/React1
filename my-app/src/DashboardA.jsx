// DashboardA.jsx
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const DashboardA = () => {
  const [error, setError] = useState('');
  const [allUserData, setAllUserData] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [selectedUserData, setSelectedUserData] = useState(null);
   const Navigate = useNavigate();
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
  }, []); // The empty dependency array ensures this effect runs once on component mount

  const location = useLocation();
  const dashboardData = location.state ? location.state.responseData : null;

  const handleUserNameClick = async (userId) => {
    try {
      if (selectedUserId === userId) {
        // If the same user is clicked again, hide the details
        setSelectedUserId(null);
        setSelectedUserData(null);
      } else {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
           Navigate("/Edit")
          throw new Error(`Failed to fetch user data for ID: ${userId}`);
        }

        const userData = await response.json();
        console.log(`Fetched user data for ID ${userId}:`, userData);
        setSelectedUserId(userId);
        setSelectedUserData(userData);
      }
    } catch (error) {
      console.error('Error fetching user data:', error);
      setError('An error occurred while fetching user data.');
    }
  };

  const renderNestedTable = (data) => {
    if (typeof data === 'object' && !Array.isArray(data)) {
      return (
        <table className="table table-bordered table-striped">
          <tbody>
            {Object.entries(data).map(([key, value]) => (
              <tr key={key}>
                <td>{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                <td>{renderNestedTable(value)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      );
    } else {
      return <span>{data}</span>;
    }
  };
  

  return (
    <div className="p-5 ">
      <h2>Welcome to Dashboard:</h2>
      {dashboardData && (
        <div className="border-dark p-5">
          <h3>User Data:</h3> 
          {/* <p>Username: {dashboardData.username}</p> */}
          {/* Display other user data as needed
          {/* {dashboardData.image && typeof dashboardData.image === 'string' && (
            <img src={dashboardData.image} alt="user" className="img-fluid" />
          )} */}
        </div>
      )}
      <div className="mt-3">
        <h3>All Users:</h3>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Username</th>
              {/* Add more table headers based on your user data structure */}
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
                  {/* Add more table cells based on your user data structure */}
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => handleUserNameClick(user.id)}
                    >
                      View Details
                    </button>
                    
                  </td>
                </tr>
                {selectedUserId === user.id && selectedUserData && (
                  <tr>
                    <td colSpan="4">
                      <div className="mt-3">
                       
                        {renderNestedTable(selectedUserData)}
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
  );
};

export default DashboardA;
