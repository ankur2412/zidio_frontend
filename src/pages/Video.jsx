import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-regular-svg-icons'; // Import the specific icon
import { Link } from 'react-router-dom';
import '../style/Video.css';

const Video = () => {
  return (
    <div className='border_text'>
      <p className='watch_text'>Watch video</p>
      <h1 className='text_meet'>Your Meeting Starts Here</h1>
      <div className='play_icon'>
        <Link to='https://www.youtube.com/'><FontAwesomeIcon icon={faCirclePlay} /></Link>
      </div>
    </div>
  );
};

export default Video;
