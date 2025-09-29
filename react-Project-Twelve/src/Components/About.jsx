import React from 'react'
import { useNavigate } from 'react-router-dom'        // UseNavigate hook import karte hain

const About = () => {

  const navigate = useNavigate();          // UseNavige hook ka use karke navigate function lete hain
  return (
    <div>About Page
      <button onClick={ () => {
        navigate('/Dashboard');                     // This will navigate to the Dashboard page
      } }>
        Move to Dashborad Page
      </button>
    </div>
  )
}

export default About