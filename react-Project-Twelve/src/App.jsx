import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'        // react-router import ese karke hain
import Home from './components/Home'
import About from './components/About'
import Dashboard from './components/Dashboard'
import NavBar from './components/NavBar'
import ParamComp from './Components/ParamComp'
import Courses from './Components/Courses'
import Reports from './Components/Reports'
import MockTest from './Components/MockTest'

const router = createBrowserRouter( [               // ye array of object leter hain


  // Home route
  {
    path: '/',                      // UPL path hain. Jab bhi ye path milega to ye element render karna hain
    element: <div>                  { /* Us path par konsa components render karna hain. */ }
      <NavBar />
      <Home />
    </div>         
  },

  // About route
  {
    path: '/about',
    element: <div>
      <NavBar />
      <About />
    </div>
  },

  // Dashboard route with nested routes
  {
    path: '/dashboard',
    element: <div>
      <NavBar />
      <Dashboard />
    </div>,
    children: [                 // children bana diye hain taki dashboard ke andar aur bhi routes bana sake
      {
        path: 'courses',          // ye relative path hain. /dashboard/courses
        element: <Courses />
      },
      {
        path: 'reports',          // ye relative path hain. /dashboard/reports
        element: <Reports />
      },
      {
        path: 'mock-test',          // ye relative path hain. /dashboard/mock-test
        element: <MockTest />
      }
    ]
  },

  // Parameterized route
  {
    path: '/student/:name',                      // :name is a parameter
    element: <div>
      <NavBar />
      <ParamComp />
    </div>
  },

  // Error route
  {
    path: '*',             // Agr koi bhi path upar wale 3 me se match nahi karta to ye wala path chalega
    element: <div>
      <NavBar />
      <h1>Error 404! Page Not Found</h1>
    </div>
  }

] );

function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />     {/* router provider ko router dena hain jo upar bana hain */}
      </div>
    </>
  )
}

export default App
