import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../dashboard/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/TeamMember.css';  

const AddTeamMember = () => {
  const [name, setName] = useState('');
  const [role, setRole] = useState('');
  const [expertise, setExpertise] = useState('');
  const [videoUrl, setVideoUrl] = useState('');
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('role', role);
    formData.append('expertise', expertise);
    formData.append('videoUrl', videoUrl);
    formData.append('image', image);

    try {
      const response = await axios.post('http://localhost:4000/api/teams', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success(response.data.message);  
    } catch (err) {
      toast.error('Error adding team member.');  
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="form-container">
        <h2 className='Add_member'>Add Team Member</h2>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter team member's name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Role</label>
            <input
              type="text"
              placeholder="Enter role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label>Expertise (comma-separated)</label>
            <input
              type="text"
              placeholder="Enter expertise"
              value={expertise}
              onChange={(e) => setExpertise(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Video URL</label>
            <input
              type="url"
              placeholder="Enter video URL"
              value={videoUrl}
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>Image</label>
            <input
              type="file"
              onChange={handleImageChange}
              accept="image/*"
              required
            />
          </div>
          <button type="submit" className="submit-button">Add Member</button>
        </form>
      </div>
      <ToastContainer />  
    </>
  );
};

export default AddTeamMember;