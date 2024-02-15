// import React from 'react';
// import { useLocation } from 'react-router-dom';
// const Dashboard = () => {
//   const location = useLocation();

//   const dashboardData = location.state ? location.state.responseData : null;

//   return (<>
//     <div className='p-5 bg-danger-subtle '>
//       <h2>Welcome to Dashboard:</h2>
//       {dashboardData && (
//          <div className="border-dark p-5 ">
//           {/* <h5> id: {dashboardData.id}</h5>
//           <h5> username: {dashboardData.username}</h5>
//           <h5> email: {dashboardData.email}</h5>
//           <h5> firstName: {dashboardData.firstName}</h5>
//           <h5> lastName: {dashboardData.lastName}</h5>
//           <h5> gender: {dashboardData.gender}</h5>
//           <img src={dashboardData.image} alt="user"></img> */}
//           {Object.keys(dashboardData).map((key) => (
//               <div key={key}>
//                 {typeof dashboardData[key] === 'object' ? null : (
//                   <h5>
//                     {key.charAt(0).toUpperCase() + key.slice(1)}: {dashboardData[key]}
//                   </h5>
//                 )}
//               </div>
//             ))}
//             {dashboardData.image && typeof dashboardData.image === 'string' && (
//               <img src={dashboardData.image} alt="user" />
//             )}
//         </div>  
//       )}
//     </div>
//   </>);
// };
// export default Dashboard;


// import React from 'react';
// import { useLocation } from 'react-router-dom';

// const Dashboard = ({ data, parentKey }) => {
//   const renderData = (obj, parentKey = null) => {
//     return Object.keys(obj).map((key) => {
//       const currentKey = parentKey ? `${parentKey}.${key}` : key;

//       if (typeof obj[key] === 'object') {
//         return (
//           <div key={currentKey}>
//             <h5>
//               {currentKey.charAt(0).toUpperCase() + currentKey.slice(1)}:
//             </h5>
//             <div className="ml-3">
//               {renderData(obj[key], currentKey)}
//             </div>
//           </div>
//         );
//       } else {
//         return (
//           <div key={currentKey}>
//             <h5>
//               {currentKey.charAt(0).toUpperCase() + currentKey.slice(1)}: {obj[key]}
//             </h5>
//           </div>
//         );
//       }
//     });
//   };

//   const location = useLocation();
//   const dashboardData = location.state ? location.state.responseData : null;

//   return (
//     <>
//       <div className='p-5  '>
//         <h2>Welcome to Dashboard:</h2>
//         {dashboardData && (
//           <div className="border-dark p-5">
//             {renderData(dashboardData)}
//             {dashboardData.image && typeof dashboardData.image === 'string' && (
//               <img src={dashboardData.image} alt="user" />
//             )}
//           </div>
//         )}
//       </div>
//     </>
//   );
// };

// export default Dashboard;



import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Dashboard = () => {
  const [expandedKeys, setExpandedKeys] = useState([]);
  const location = useLocation();
  const dashboardData = location.state ? location.state.responseData : null;

  const toggleExpanded = (key) => {
    setExpandedKeys((prevExpandedKeys) => {
      if (prevExpandedKeys.includes(key)) {
        return prevExpandedKeys.filter((k) => k !== key);
      } else {
        return [...prevExpandedKeys, key];
      }
    });
  };

  const hasChildObjects = (obj) => {
    return Object.keys(obj).some((key) => typeof obj[key] === 'object');
  };

  const renderTable = (obj, parentKey = null) => {
    return (
      <table className="table table-bordered table-striped"> {/* Add Bootstrap classes here */}
        <thead>
          <tr>
            <th scope="col">Key</th>
            <th scope="col">Toggle</th>
            
          </tr>
        </thead>
        <tbody>
          {Object.keys(obj).map((key) => (
            key !== 'image' && (
              <React.Fragment key={key}>
                <tr>
                  <th scope="row">{key}</th>
                  {hasChildObjects(obj[key]) && (
                    <td onClick={() => toggleExpanded(parentKey ? `${parentKey}.${key}` : key)}>
                      {expandedKeys.includes(parentKey ? `${parentKey}.${key}` : key) ? '▼' : '▶'}
                    </td>
                  )}
                  <td>{typeof obj[key] === 'object' ? null : obj[key]}</td>
                </tr>
                {typeof obj[key] === 'object' && expandedKeys.includes(parentKey ? `${parentKey}.${key}` : key) && (
                  <tr>
                    <td colSpan="3" className="nested-table">
                      {renderTable(obj[key], parentKey ? `${parentKey}.${key}` : key)}
                    </td>
                  </tr>
                )}
              </React.Fragment>
            )
          ))}
        </tbody>
      </table>
    );
  };

  return (
    <div className="p-5 bg-danger-subtle">
      <h2>Welcome to Dashboard:</h2>
      {dashboardData && (
        <div className="border-dark p-5">
          {renderTable(dashboardData)}
          {dashboardData.image && typeof dashboardData.image === 'string' && ( 

                      <img src={dashboardData.image} alt="user" />
         )}
        </div>
      )}
    </div>
  );
};

export default Dashboard;


