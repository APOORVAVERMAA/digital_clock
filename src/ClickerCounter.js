import React, {useRef}from "react";
const ClickerCounter=()=>{
    const countRef=useRef(0);     //useref to store the counter value
    const displayRef=useRef(null);  //useref to target the display element

    const handleClick=()=>{
        countRef.current+=1;
        displayRef.current.innerText=countRef.current;
    };
    const decrement=()=>{
        countRef.current-=1;
        displayRef.current.innerText=countRef.current;
    }
    return(
        <div>
        <h1 ref={displayRef}>0
        </h1>
        <button onClick={handleClick}>increment</button>
        <button onClick={decrement}>decrement</button>
        </div>
    );
};
export default ClickerCounter;
