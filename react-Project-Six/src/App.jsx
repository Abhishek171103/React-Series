import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import Loginbtn from './components/Loginbtn';

function App() {
  const [IsLoggedIn, setLoggedIn] = useState(true);

  if (IsLoggedIn) {                                         // (1) if-else conditional rendering
    return <LogoutBtn></LogoutBtn>
  } else {
    return <Loginbtn></Loginbtn>
  }

  // return(                                                   (2) ternory operator conditional rendering
  //   <div>
  //     {IsLoggedIn ? <LogoutBtn></LogoutBtn> : <Loginbtn></Loginbtn>}
  //   </div>
  // )

  // return (                                                  (3) logical operator conditional rendering
  //   <div>
  //     <h1>Welcome to home</h1>
  //     <div>
  //       {IsLoggedIn && <LogoutBtn></LogoutBtn>}
  //     </div>
  //   </div>
  // )

  // if (!IsLoggedIn) {                                    (4) Early return operator conditional rendering
  //   return (
  //     <Loginbtn></Loginbtn>
  //   )
  // }else{
  //   return (
  //     <LogoutBtn></LogoutBtn>
  //   )
  // }
}

export default App
