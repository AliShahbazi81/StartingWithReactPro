import React, { useEffect, useState } from 'react';

export default function App() {
  const [advice, setAdvice] = useState("");
  const [count, setCount] = useState(0);

  async function getAdvice()
  {
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json();
    setAdvice(data.slip.advice)
    setCount((c) => c+1)
  }

  useEffect(function() {
    getAdvice()
  }, [])

  return (
    <>
      <h1>{advice}</h1>
      <button 
      onClick={getAdvice}>
        Get Advice!
        </button>
        <Message count={count} />
    </>
  );
}

function Message(props:any){
  return (
    <p>
      You have clicked on the button 
       <strong> {props.count} </strong>
      </p>
  );
}