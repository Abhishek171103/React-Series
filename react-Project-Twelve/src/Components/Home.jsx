import React from 'react'
import { useNavigate } from 'react-router-dom'   // UseNavigate hook import karte hain

const Home = () => {
  
  const navigate = useNavigate();          // UseNavige hook ka use karke navigate function lete hain
  return (
    <div>Home Page
      <button onClick={ () => {
        navigate('/about');                     // This will navigate to the About page
        // window.location.href = '/about'      // This will navigate to the About page but with page reload
      } }>  
        Move to About Page
      </button>
    </div>
  )
}

export default Home