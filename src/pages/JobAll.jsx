
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/JobAll.css";

const Jobs = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [applicant, setApplicant] = useState({ name: "", email: "", resume: null });
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  const handleApply = async () => {
    if (!applicant.name || !applicant.email) {
      alert("Please fill in all required fields.");
      return;
    }
  
    const formData = new FormData();
    formData.append("name", applicant.name);
    formData.append("email", applicant.email);
    if (applicant.resume) formData.append("resume", applicant.resume);
  
    try {
      const response = await axios.post(`http://localhost:4000/api/apply/${selectedJobId}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert(response.data.message);
      setShowForm(false);
    } catch (err) {
      console.error("Error submitting application:", err.response?.data || err.message);
      alert("Error submitting application: " + (err.response?.data?.message || err.message));
    }
  };
  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="jobs-container">
      <h1 className="job_h1">Job Listings</h1>
      <h1 className="job_text5">Apply job And Internship</h1>
      <div className="job-list">
        {jobs.map((job) => (
          <div className="job-card" key={job._id}>
            <h2 className="job_text2">{job.title}</h2>
            <p className="text_job4"><strong>Type:</strong> {job.type}</p>
            <p className="text_job4"><strong>Description:</strong> {job.description}</p>
            <p className="text_job4"><strong>Requirements:</strong> {job.requirements}</p>
            <p className="text_job4"><strong>Location:</strong> {job.location}</p>
            <p className="text_job4"><strong>Deadline:</strong> {new Date(job.applicationDeadline).toLocaleDateString()}</p>
            <button
              className="job_apply"
              onClick={() => {
                setSelectedJobId(job._id);
                setShowForm(true);
              }}
            >
              Apply
            </button>
          </div>
        ))}
      </div>

      {showForm && (
        <div className="application-form">
          <h2>Apply for Job</h2>
          <label>
            Name:
            <input
              type="text"
              value={applicant.name}
              onChange={(e) => setApplicant({ ...applicant, name: e.target.value })}
              required
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              value={applicant.email}
              onChange={(e) => setApplicant({ ...applicant, email: e.target.value })}
              required
            />
          </label>
          <label>
            Resume:
            <input
              type="file"
              onChange={(e) => setApplicant({ ...applicant, resume: e.target.files[0] })}
            />
          </label>
          <button onClick={handleApply}>Submit</button>
          <button onClick={() => setShowForm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default Jobs;

