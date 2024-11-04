// import logo from './logo.svg';
// // import './App.css';

// // function App() {
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <img src={logo} className="App-logo" alt="logo" />
// //         <p>
// //           Edit <code>src/App.js</code> and save to reload.
// //         </p>
// //         <a
// //           className="App-link"
// //           href="https://reactjs.org"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //         >
// //           Learn React
// //         </a>
// //       </header>
// //     </div>
// //   );
// // }
// import React from 'react';
// import ReactDOM from 'react-dom';
// import digiclock from'./digiclock';
// import './digiclock';
// import { useState } from 'react';
// import { useEffect } from 'react';

// //functional component for the main app
// const App= ()=>{
//   return (
//     <div>
//       <digiclock/>
//     </div>
//     );
// };

// // function App(){
// //   return <h1>Hello, world!</h1>;
// // }

// // ReactDOM.render(<App/>,document.getElementById('root'));
// export default digiclock;


// import React, { useState, useEffect } from "react";
// import "./digiclock.css";

// function DigiClock() {
//   const [time, updateTime] = useState(new Date());

//   useEffect(() => {
//     // timer updation logic
//     const timer = setInterval(() => {
//       updateTime(new Date());
//     }, 1000);
//     return () => clearInterval(timer);
//   }, []);

//   return (
//     <div className="App">
//       <div className="elementcontainer">
//         <h1>Digital Clock</h1>
//         <div className="timeparent">
//           <div className="timecontainer">
//             {/* print the string prettily */}
//             <span className="time">{time.toLocaleTimeString()}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DigiClock;

import React, { useState } from 'react';
import './calc.css';
function App() {
  const [value, setValue] = useState('');

  return (
    <div className="container">
      <div className="calculator">
        <form action="">
          <div className='display'>
            <input type= "text" value={value}/>
            </div>
          <div>
            <input type="button" value="AC" onClick={e => setValue('')}/>
            <input type="button" value="DE" onClick={e => setValue(value.slice(0, -1))}/>
            <input type="button" value="." onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="/" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="*" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="+" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="-" onClick={e => setValue(value + e.target.value)}/>
          </div>
          <div>
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}/>
            <input type="button" value="=" className='equal' onClick={e => setValue(eval(value))}/>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;