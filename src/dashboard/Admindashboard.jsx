import React from 'react';
import { FaHistory, FaUsers, FaTrophy, FaPlusCircle, FaUserCheck, FaTasks } from 'react-icons/fa';
import AdminNavbar from '../dashboard/AdminNavbar';
import { Link } from 'react-router-dom';
import '../style/Admindashboard.css'

const Admindashboard = () => {
  return (
    <div>
      <AdminNavbar />
      <div className='back_img'>
      <h1 className='dashboard_text'>Admin Dashboard</h1>
      <div className="dashboard_admincards">
        <div className="admincard"><Link to="/Timeline">
          <FaHistory className="admincard-icon" /></Link>
          <p>Timeline</p>
        </div>
        <div className="admincard"><Link to="/teammember">
          <FaUsers className="admincard-icon" /></Link>
          <p>TeamMembe</p>
        </div>
        <div className="admincard"><Link to="/achievement">
          <FaTrophy className="admincard-icon" /></Link>
          <p>Achievement</p>
        </div>
        <div className="admincard"> <Link to="/jobcreate">
          <FaPlusCircle className="admincard-icon" /></Link>
          <p>JobCreate</p>
        </div>
        <div className="admincard"> <Link to="/getteammember">
          <FaUserCheck className="admincard-icon" /></Link>
          <p>AllTeamMember</p>
        </div>
        <div className="admincard"><Link to="/getupdatejob">
          <FaTasks className="admincard-icon" /></Link>
          <p>UpdateJob</p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Admindashboard;
