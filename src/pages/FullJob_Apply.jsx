import React from 'react'
import JobAll from '../pages/JobAll'
import Navbar from '../components/Navbar'
import Fotter from '../components/Fotter'
import '../style/FullJob_apply.css'
const FullJob_Apply = () => {
  return (
  <>
    <Navbar />
    <div className="Fulljob-container">
      {/* Full-Width Image */}
      <div className="header-image1">
      All Job And Internship Apply
      </div>
      <JobAll /> 
      
    </div>
    <Fotter />
    </>
  )
}

export default FullJob_Apply