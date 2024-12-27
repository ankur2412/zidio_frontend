import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/ApplySubmit.css';

const Applications = ({ jobId }) => {
  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(`http://localhost:4000/api/apply/${jobId}`);
        setApplications(response.data);
        setLoading(false);
      } catch (err) {
        setError('Error fetching applications.');
        setLoading(false);
      }
    };

    fetchApplications();
  }, [jobId]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p className="error-message">{error}</p>;
  }

  return (
    <div className="applications-container">
      <h1>Applications</h1>
      {applications.length > 0 ? (
        <ul>
          {applications.map((app) => (
            <li key={app._id} className="application-card">
              <h2>{app.name}</h2>
              <p>Email: {app.email}</p>
              <p>Applied At: {new Date(app.appliedAt).toLocaleString()}</p>
              {app.resume && (
                <a href={app.resume} target="_blank" rel="noopener noreferrer" className="resume-link">
                  View Resume
                </a>
              )}
            </li>
          ))}
        </ul>
      ) : (
        <p>No applications found.</p>
      )}
    </div>
  );
};

export default Applications;