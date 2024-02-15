import React from 'react';

const Profile = () => {
  return (
    <div className="container mt-5">
      <div className="row">
      <div className="col-md-8">
          
        </div>
        <div className="col-md-4">
          <div className="profile-sidebar">
            <div className="profile-userpic">
              <img
                src="https://th.bing.com/th/id/R.7eabd110ad08b9c94da1b232d8e5c379?rik=fJmbnGcR61x81g&riu=http%3a%2f%2frosiescafe.com%2fsites%2fdefault%2ffiles%2fstyles%2fapp_logo%2fpublic%2fbusiness%2fpage%2fmens-icon.png%3fitok%3dvrMClGoD&ehk=z7LDG2r4QlDoyOwv38aZ5Y8Ll5z3ZNeNlTww6kZZqzY%3d&risl=&pid=ImgRaw&r=0"
                className="img-fluid rounded-circle"
                alt="Profile"
              />
            </div>

            <div className="profile-usertitle">
              <div className="profile-usertitle-name">Nagesh Patidar</div>
              <div className="profile-usertitle-job">Developer</div>
            </div>

            <div className="profile-userbuttons">
              <button type="button" className="btn btn-outline-success btn-sm">
                Follow
              </button>
              <button type="button" className="btn btn-outline-danger btn-sm">
                Message
              </button>
            </div>

            <div className="profile-usermenu">
              <ul className="nav">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="bi bi-house-door"></i> Overview
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="bi bi-person"></i> Account Settings
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" target="_blank">
                    <i className="bi bi-check"></i> Tasks
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    <i className="bi bi-flag"></i> Help
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

    
      </div>
    </div>

)
  
};

export default Profile;
