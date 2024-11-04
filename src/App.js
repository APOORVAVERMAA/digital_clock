
import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, updateTime] = useState(new Date());
  useEffect(() => {
    const timer = setInterval(() => {
      updateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <div className="App">
      <div className="elementcontainer">
        <h1>Digital Clock</h1>
        <div className="timeparent">
          <div className="timecontainer">
            <span className="time">{time.toLocaleTimeString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";
// import "./calc.css";

// import App from "./calc";

// const root = createRoot(document.getElementById("root"));
// root.render(
//   <StrictMode>
//     <App />
//   </StrictMode>
// );