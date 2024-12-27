import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaHome, FaHistory,FaUsers,FaTrophy,FaPlusCircle,FaUserCheck,FaTasks, FaSignOutAlt } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../style/AdminNavbar.css';

const NavbarSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleLogout = () => {
    toast(
      ({ closeToast }) => (
        <div>
          <p style={{ color: 'blue' }}>Are you sure you want to logout?</p>
          <button
            onClick={() => {
             
              localStorage.removeItem('adminId'); 
              toast.success('You have successfully logged out.');
              closeToast();
              
              window.location.href = '/adminlogin';
            }}
            className="confirm-button"
          >
            Yes
          </button>
          <button onClick={closeToast} className="cancel-button">
            No
          </button>
        </div>
      ),
      {
        closeOnClick: false,
        autoClose: false,
      }
    );
  };

  return (
    <div className="app-container">
      <ToastContainer />
      {/* Navbar */}
      <nav className="navbar1">
        <div className="navbar1-toggle" onClick={toggleSidebar}>
          <FaBars />
        </div>
        <button className="close" onClick={handleLogout}>
          <FaSignOutAlt />
        </button>
      </nav>

      {/* Sidebar */}
      <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
      <ul className="sidebar-menu">
  <li>
    <FaHome />
    <Link to="/admindashboard">
      <span>Home</span>
    </Link>
  </li>
  <li>
    <FaHistory />
    <Link to="/Timeline">
      <span>Timeline</span>
    </Link>
  </li>
  <li>
    <FaUsers />
    <Link to="/teammember">
      <span>TeamMember</span>
    </Link>
  </li>
  <li>
    <FaTrophy />
    <Link to="/achievement">
      <span>Achievement</span>
    </Link>
  </li>
  <li>
    <FaPlusCircle />
    <Link to="/jobcreate">
      <span>JobCreate</span>
    </Link>
  </li>
  <li>
    <FaUserCheck />
    <Link to="/getteammember">
      <span>GetTeamMember</span>
    </Link>
  </li>
  <li>
    <FaTasks />
    <Link to="/getupdatejob">
      <span>GetUpdateJob</span>
    </Link>
  </li>
  <li>
    <FaTasks />
    <Link to="/applysubmit">
      <span>ApplySubmit</span>
    </Link>
  </li>
  <li onClick={handleLogout}>
    <FaSignOutAlt />
    <span>Logout</span>
  </li>
</ul>

      </aside>
    </div>
  );
};

export default NavbarSidebar;





















// import React from 'react'
// import { Link } from 'react-router-dom';
// import '../style/AdminNavbar.css';

// const AdminNavbar = () => {
//   return (
//     <div className='admin_navbar'>
//       <button className='Logout'>LogOut</button>

//     </div>
//   )
// }

// export default AdminNavbar