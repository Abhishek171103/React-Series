import './App.css'
import LoggerComponent from "./components/LoggerComponent";
import TimerComponent from "./components/TimerComponent";
import DataFetcher from "./components/DataFetcher";
import ResizeComponent from "./components/ResizeComponent";
import MultiEffectComponent from "./components/MultiEffectComponent";

function App() {

  return (
    <>
      <div>
        <LoggerComponent></LoggerComponent>
        <TimerComponent></TimerComponent>            {/* Component unmounted, clearing interval */}
        <ResizeComponent></ResizeComponent>
        <MultiEffectComponent></MultiEffectComponent>
        <DataFetcher></DataFetcher>
        
      </div>
    </>
  )
}

export default App
