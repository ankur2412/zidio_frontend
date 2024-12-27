
import React, { useEffect, useState } from "react";
import axios from "axios";
import "../style/AllAchievement.css"; 

const Achievements = () => {
  const [achievements, setAchievements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAchievements = async () => {
      try {
        const response = await axios.get("http://localhost:4000/api/achievement");
        setAchievements(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchAchievements();
  }, []);

  if (loading) {
    return <div className="loading">Loading achievements...</div>;
  }

  if (error) {
    return <div className="error">Error: {error}</div>;
  }

  return (
    <div className="achievements-container">
      <h1 className="title">Achievements</h1>
      <h1 className="title_work">Working Projects</h1>
      <div className="achievements-grid">
        {achievements.map((achievement, index) => (
          <div className="achievement-card" key={index}>
            {achievement.image && (
              <img
                src={`http://localhost:4000/${achievement.image}`}
                alt={achievement.heading}
                className="achievement-image"
              />
            )}
            <h2 className="achiv_text">{achievement.heading}</h2>
            <p>{achievement.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Achievements;

