import React from 'react'
import Navbar from '../components/Navbar'
import AllTimeline from '../pages/AllTimelineGet';
import AllTeamMember from '../pages/AllTeamMember'
import AllAchievement from '../pages/AllAchievement'
import AllClientReview from '../pages/AllClientReview'
import JobAll from '../pages/JobAll'
import { FaUserTie, FaUsers, FaHandsHelping } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Video from '../pages/Video'
import Fotter from '../components/Fotter'

import '../style/Home.css'


const Home = () => {
  return (
    <div>
    <Navbar />
    <div className="background">
       <h1 className='heading'>Welcome to Zidio Family</h1>
      <p></p>
    </div>
   
<AllTimeline />
<AllTeamMember />
{/* <ClientReview /> */}
<AllClientReview />
<AllAchievement />
<JobAll />
<Video />
<Fotter />

   

    </div>
  )
}

export default Home



