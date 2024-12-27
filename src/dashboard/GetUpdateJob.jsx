import React, { useEffect, useState } from "react";
import axios from "axios";
import AdminNavbar from '../dashboard/AdminNavbar';
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Import the styles
import "../style/GetUpdateJob.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedJob, setSelectedJob] = useState(null); // For editing a job
  const [formData, setFormData] = useState({
    title: "",
    type: "Full-Time",
    description: "",
    requirements: "",
    location: "",
    applicationDeadline: "",
  });

  // Fetch all jobs
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/job");
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message || "Error fetching job listings.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);
  const handleDelete = (id) => {
    toast(
      ({ closeToast }) => (
        <div>
          <p style={{ color: 'blue' }}>Are you sure you want to delete this team member?</p>
          <button
            onClick={async () => {
              try {
                await axios.delete(`http://localhost:4000/api/job/${id}`);
                toast.success("Team member deleted successfully.");
                setSelectedJob((prev) => prev.filter((member) => member._id !== id));
                closeToast();
              } catch (err) {
                toast.error("Error deleting team member.");
              }
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

  const handleEditClick = (job) => {
    setSelectedJob(job);
    setFormData({
      title: job.title,
      type: job.type,
      description: job.description,
      requirements: job.requirements,
      location: job.location,
      applicationDeadline: new Date(job.applicationDeadline).toISOString().split("T")[0],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleUpdate = async () => {
    try {
      await axios.put(`http://localhost:4000/api/job/${selectedJob._id}`, formData);
      setJobs(jobs.map((job) => (job._id === selectedJob._id ? { ...job, ...formData } : job)));
      setSelectedJob(null);
    } catch (err) {
      toast.error("Error updating job.");
    }
  };

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <>
      <AdminNavbar />
      <div className="jobs-container4">
        <h1 className="job_requirement">Job Listings</h1>
        <div className="job-list4">
          {jobs.map((job) => (
            <div className="job-card4" key={job._id}>
              <h2>{job.title}</h2>
              <p className="para_text"><strong>Type:</strong> {job.type}</p>
              <p className="para_text"><strong>Description:</strong> {job.description}</p>
              <p className="para_text"><strong>Requirements:</strong> {job.requirements}</p>
              <p className="para_text"><strong>Location:</strong> {job.location}</p>
              <p className="para_text"><strong>Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}</p>
              <button onClick={() => handleEditClick(job)} className="edit-button1">Edit</button>
              <button onClick={() => handleDelete(job._id)} className="delete-button1">Delete</button>
            </div>
          ))}
        </div>

        {selectedJob && (
          <div className="modal1">
            <div className="modal-content1">
              <h3>Edit Job</h3>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                placeholder="Job Title"
              />
              <select name="type" value={formData.type} onChange={handleInputChange}>
                <option value="Full-Time">Full-Time</option>
                <option value="Part-Time">Part-Time</option>
                <option value="Internship">Internship</option>
              </select>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                placeholder="Job Description"
              />
              <textarea
                name="requirements"
                value={formData.requirements}
                onChange={handleInputChange}
                placeholder="Job Requirements"
              />
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                placeholder="Job Location"
              />
              <input
                type="date"
                name="applicationDeadline"
                value={formData.applicationDeadline}
                onChange={handleInputChange}
              />
              <button onClick={handleUpdate} className="update-button1">Update</button>
              <button onClick={() => setSelectedJob(null)} className="cancel-button1">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Jobs;
