'use client'

import { useState } from "react"

export default function Home() {

  const [ context, setContext ] = useState('');
  const [ inputValue, setInputValue ] = useState('')

  const sendResponse = () => {
    fetch('http://localhost:3000/api/generate', {
      method: 'POST',
      body: JSON.stringify({
        input: context,
      }),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
      }
    })
    .then(response => console.log(response))
    // .then(data => setContext(data))
  }

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
   <main className='h-screen w-screen bg-black/10 flex items-center justify-center'>
      <div className="h-[60%] w-[60%] bg-blue-300 rounded-md flex flex-col items-center justify-center p-5">
        <div className="h-full w-full bg-white/80 rounded-md">
          <p className="text-center">{context}</p>
        </div>
        <div className="flex w-full mt-4 h-12 rounded-md overflow-hidden">
          <input value={inputValue} onChange={handleInputChange}  className="bg-white/50 w-full h-full pl-4"></input>
          <button onClick={() => sendResponse()} className="bg-yellow-300 w-20 h-full">Send</button>
        </div>
      </div>
   </main>
  )
}
