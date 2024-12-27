import React, { useState } from 'react';
import axios from 'axios';
import AdminNavbar from '../dashboard/AdminNavbar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import '../style/JobCreate.css'; 

const JobForm = () => {
  const [formData, setFormData] = useState({
    title: '',
    type: '',
    description: '',
    requirements: '',
    location: '',
    applicationDeadline: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:4000/api/job', formData);
      toast.success(response.data.message);
    } catch (error) {
      console.error('Error adding job:', error);
      toast.error(error.response?.data?.message || 'An error occurred');
    }
  };

  return (
    <>
      <AdminNavbar />
      <div className="job-form-container">
        <h2>Post a New Job</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Job Title:
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Job Type:
            <select name="type" value={formData.type} onChange={handleChange} required>
              <option value="">Select Type</option>
              <option value="Full-Time">Full-Time</option>
              <option value="Part-Time">Part-Time</option>
              <option value="Internship">Internship</option>
            </select>
          </label>
          <label>
            Description:
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Requirements:
            <textarea
              name="requirements"
              value={formData.requirements}
              onChange={handleChange}
            />
          </label>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>
          <label>
            Application Deadline:
            <input
              type="date"
              name="applicationDeadline"
              value={formData.applicationDeadline}
              onChange={handleChange}
              required
            />
          </label>
          <button type="submit">Submit Job</button>
        </form>
      </div>
      <ToastContainer /> 
    </>
  );
};

export default JobForm;

