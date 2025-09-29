import './App.css'
import ChildA from './components/ChildA'
import { createContext, useState } from 'react'


  const UserContext = createContext();       {/* Ye context create karne ka tarika hai. */}
  const ThemeContext = createContext();    {/* Ye context create karne ka tarika hai. */}

  function App() {

    const [user, setUser] = useState({name: "Abhishek"});
    const [theme, setTheme] = useState("light");
  
  return (
    <>
      <div>
        <h1>React Project Eleven</h1>
        <UserContext.Provider value={user}>  {/* Ye context provider karne ka tarika hai. */}

            <ThemeContext.Provider value={{theme, setTheme}}>     {/* Nesting of context provider */}
              <div className="container">
                <ChildA></ChildA>
              </div>
            </ThemeContext.Provider>

        </UserContext.Provider>

        
        {/* <h1>Current Theme: {theme}</h1>
        <ThemeContext.Provider value={theme}>   
          <ChildA></ChildA>
        </ThemeContext.Provider> */}
      </div>
    </>
  )
}

export default App;
export {UserContext};                              {/* Ye context ko export karne ka tarika hai. */}
export {ThemeContext};
