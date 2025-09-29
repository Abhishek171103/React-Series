import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'        // UseNavigate hook import karte hain

const Dashboard = () => {

  const navigate = useNavigate();          // UseNavige hook ka use karke navigate function lete hain
  return (
    <div>Dashboard Page
      <button onClick={ () => {
        navigate('/');                     // This will navigate to the About page
      } }>
        Move to Home Page
      </button>
      <Outlet />    { /* Outlet component bana diye hain taki yaha par children wale routes render ho sake */ }
    </div>
  )
}

export default Dashboard