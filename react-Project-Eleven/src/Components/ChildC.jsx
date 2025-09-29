import React, { useContext } from "react";
import { UserContext, ThemeContext } from "../App";                       // yaha se context import hoga
import './ChildC.css'

function ChildC() {
  const user = useContext(UserContext);                     // context consume
  const { theme, setTheme } = useContext(ThemeContext);     // multiple context consume

    function handleClick () {
        if(theme === "light"){
            setTheme("dark");
        } else {
            setTheme("light");
        }
    }

    return (
        <>
        <div id="Div1">
            <h1>Hi, I am Child C component and my name is {user.name}</h1>
        </div>
        <div id="Div2" style={ theme === "light" ? {backgroundColor: "white", color: "black"} : {backgroundColor: "black", color: "white"}  }>
                <button onClick={handleClick}>
                    Current Theme: {theme}
                </button>
        </div>
        </>
    );
}

export default ChildC;
