import './App.css'

function App() {

  function handleClick(){
    alert("Clicked Button.");
  }

  function handleMouseOver() {
    alert("Yehh !!");
  }

  function handleInputChange(e){
    console.log("Value changed :- Value till now: ", e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Submit form.")
  }

  return (
    <>
      <div>
        {/* <button onClick={alert("Aree ese kese chalega bhai.")}>         // Immediate Invocation */}
        <button onClick={ () => alert("Haan Ab nahi ho raha hai immediate invocation")}
                style={{border: "solid black 3px", marginBottom: "10px"}}>
          Click the button
        </button>

        <form onSubmit={handleSubmit} style={{border: "solid black 3px", marginBottom: "10px"}}>
          <input type="text" onChange={handleInputChange} />
          <button type='submit'>Submit</button>
        </form>

        <p onMouseOver={handleMouseOver} style={{border: "solid black 3px", marginBottom: "10px"}}>I Love My India.</p>

        <button onClick={handleClick}>
          Click here
        </button>
      </div>
    </>
  )
}

export default App
