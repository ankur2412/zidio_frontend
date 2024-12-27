import React from 'react'
import { Link } from 'react-router-dom';
import '../style/Navbar.css'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar">
      <div className="logo">Zidio </div>
      <div className='nav'>
      <Link to='/'>Home</Link>
      <Link to='/fullteam'>AllTeam</Link>
      
        <Link to='/fulljobapply'>Job Apply</Link>
        <Link to='/clientreview'>ClientReview</Link>
        </div>
    </nav>
    </div>
  )
}

export default Navbar




