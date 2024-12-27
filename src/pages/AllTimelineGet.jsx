import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../style/AllTimelineGet.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faNodeJs, faJs } from '@fortawesome/free-brands-svg-icons';

const AllTimeline = () => {
    const [timelines, setTimelines] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        const fetchTimelines = async () => {
            try {
                const response = await axios.get('http://localhost:4000/api/timelines');
                setTimelines(response.data);
            } catch (err) {
                setError('Failed to fetch timelines');
            }
        };
        fetchTimelines();
    }, []);

    const getIcon = (index) => {
        switch (index) {
            case 0:
                return faReact;
            case 1:
                return faNodeJs;
            case 2:
                return faJs;
            default:
                return faReact;
        }
    };

    return (
    
        <div className="timeline-container">
     
            {error && <p className="error-message">{error}</p>}
            <div className="timeline-list">
                {timelines.map((timeline, index) => (
                    <div key={index} className="timeline-card">
                        <div className="timeline-icon">
                            <FontAwesomeIcon icon={getIcon(index)} size="3x" />
                        </div>
                        <div className="timeline-content">
                            <h2>{timeline.title}</h2>
                            <p>{timeline.description}</p>
                            <span className="timeline-date">
                                {new Date(timeline.date).toLocaleDateString()}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
       

    );
};

export default AllTimeline;
