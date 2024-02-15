
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Edit = () => {
  const { userId } = useParams();
  const [userData, setUserData] = useState(null);
  const [editedUserData, setEditedUserData] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!userId) {
          throw new Error('Invalid user ID.');
        }

        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch user data.');
        }

        const data = await response.json();
        console.log('Fetched user data:', data);
        setUserData(data);
        setEditedUserData(data);
      } catch (error) {
        console.error('Error fetching user data:', error);
        setError('An error occurred while fetching user data.');
      }
    };

    fetchUserData();
  }, [userId]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setEditedUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const renderNestedData = (obj, prefix = "") => {
    return (
      <table className="table table-bordered table-striped table-hover table-responsive" style={{ backgroundColor: '#f8f9fa' }}>
        <tbody>
          {Object.entries(obj).map(([key, value]) => (
            <tr key={prefix + key}>
              <td className="fw-bold">{prefix + key.charAt(0).toUpperCase() + key.slice(1)}</td>
              <td>
                {typeof value === "object" && value !== null
                  ? renderNestedData(value, prefix + key + ".")
                  : (
                    <input
                      type="text"
                      className="form-control"
                      name={prefix + key}
                      value={value}
                      onChange={handleInputChange}
                    />
                  )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };

  const handleGoBack = () => {
    window.history.back();
  };

  const renderEditableData = () => {
    if (!editedUserData) {
      return null;
    }

    return (
      <form>
        {renderNestedData(editedUserData)}
        <button type="button" className="btn btn-primary" onClick={handleGoBack}>
          Save Changes
        </button>
      </form>
    );
  };

  return (
    <div className="container mt-3">
      <div className="row">
        <div className="col-md-8 mx-auto">
          <button className="btn btn-secondary mb-3" onClick={handleGoBack}>
            Back
          </button>
          {userData ? (
            <>
              <h3>User Details:</h3>
              {renderEditableData()}
            </>
          ) : (
            <p className="text-center">Loading user data...</p>
          )}
          {error && <p className="text-danger text-center">Error: {error}</p>}
        </div>
      </div>
    </div>
  );
};

export default Edit;
