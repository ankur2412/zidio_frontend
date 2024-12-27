import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'; 
import "../style/AllTeamMember.css"; 

const TeamMembers = () => {
  const [teamMembers, setTeamMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeamMembers = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/teams");
        console.log(response.data); 
        setTeamMembers(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchTeamMembers();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <>
  
    <h1 className="team_h1">Dedicate Team Member</h1>
    <h1 className="Enquiry">Enquiry of Team Member</h1>
    <div className="team-container">
      {teamMembers.map((member, index) => (
        <div className="team-card" key={index}>
          <img
            src={`http://localhost:4000/${member.image}`}
            alt={member.name}
            className="team-image"
          />
          <h3>{member.name}</h3>
          <p>{member.role}</p>
          <ul>
            {member.expertise.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
          {member.videoUrl && (
            <a
              href={member.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="video-link"
            >
             <FontAwesomeIcon icon={faCirclePlay} />
            </a>
          )}
        </div>
      ))}
    </div>
    {/* </div> */}
    </>
  );
};

export default TeamMembers;
