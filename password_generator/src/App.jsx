/* eslint-disable no-unused-vars */
import { useCallback, useEffect, useRef, useState } from 'react';

import './App.css'

function App() {
  const [length,setLength]=useState(8);
  const [uppercase, setUppercase] = useState(false);
  const [numbers, setNumbers] = useState(false);
  const [symbols, setSymbols] = useState(false);
  const [password,setPassword]=useState("");

  // use reference hook
  const passwordRef=useRef(null);

  const passwordGenerator=useCallback(()=>{
    let pass=""
    let str="abcdefghijklmnopqrstuvwxyz"
    if(uppercase) str+="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    if(numbers) str+="0123456789"
    if(symbols) str+="!@#$%^&*()-_=+{}[]"

    for (let i = 1; i <=length; i++) {
      let char=Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(char);
    }
    setPassword(pass)

  },[length,uppercase,numbers,symbols,setPassword])


  const copyPasswordToClipboard=useCallback(()=>{
    passwordRef.current.select();
    passwordRef.current?.setSelectionRange(0,999);
    window.navigator.clipboard.writeText(password)
  },[password])


  useEffect(()=>{
    passwordGenerator()
    },[length,numbers,symbols,uppercase,passwordGenerator])

  return(
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
      <h1 className='text-white text-center my-3'>Password generator</h1>

      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input
          type="number"
          value={password}
          className='outline-none w-full py-1 px-3 text-black'
          placeholder='password'
          readOnly
          ref={passwordRef}
          onClick={passwordGenerator}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>
        COPY
        </button>
      </div>


      <div className='flex text-sm, gap-x-2'>
        <div className='flex items-center gap-x-1'>
        <input
          type="range"
          value={length}
          min={8}
          max={100}
          className='cursor-pointer'
          // function through which value will be changing
          onChange={(e)=>setLength(e.target.value)}
        />
        <label>LENGTH: {length}</label>
        </div>


        <div className='flex items-center gap-x-2'>
          <input
            type="checkbox"
            defaultChecked={numbers}
            id="numberInput"
            onChange={()=>{
              setNumbers((prev)=>!prev)
            }}
          />
          <label className='ml-1' htmlFor="numberInput">Numbers</label>
        </div>
        
        <div className='flex items-center gap-x-2'>
          <input
            type="checkbox"
            defaultChecked={symbols}
            id="symbolInput"
            onChange={()=>{
              setSymbols((prev)=>!prev)
            }}
          />
          <label className='ml-1' htmlFor="SymbolInput">SYMBOL</label>
        </div>
            

        <div className='flex items-center gap-x-2'>
          <input
            type="checkbox"
            defaultChecked={uppercase}
            id="UpperCaseInput"
            onChange={()=>{
              setUppercase((prev)=>!prev)
            }}
          />
          <label className='ml-1' htmlFor="UpperCaseInput">UPPERCASE</label>
        </div>   

      </div>    
    </div>

  )
}

export default App
