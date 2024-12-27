import React from 'react'
import Navbar from '../components/Navbar'
import AllTeamMember from '../pages/AllTeamMember'
import Fotter from '../components/Fotter'
import '../style/ReadMore.css';


const FullTeam = () => {
  return (
    <>
    <Navbar />
    <div className="read-more-container">
      {/* Full-Width Image */}
      <div className="header-image">
      All Team Member
      </div>
      <AllTeamMember />
      
    </div>
    <Fotter />
    </>
  )
}

export default FullTeam