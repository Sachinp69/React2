import { useState, useCallback, useEffect, useRef } from 'react'


function App() {

const [length,setLength] = useState(8)
const [numberAllowed, setnumberAllowed] = useState(false)
const [charAllowed, setCharAllowed] = useState(false)
const [password , setPassword] = useState("")

const passGenerator = useCallback(() => {
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz" 

    if (numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@$&*(){}[]"

    for(let i=1; i<=length;i++){
      let char=Math.floor(Math.random()*str.length + 1)
      pass += str.charAt(char)
    }

    setPassword(pass)
}, [length, numberAllowed, charAllowed, setPassword])

const passwordRef=useRef(null)

const copyPassToClipboard = useCallback(() => {
  passwordRef.current?.select()
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(() => {
  passGenerator()
},[length, numberAllowed, charAllowed])

  return (
    <>
      <h1 className='text-4xl m-4 text-center text-white 
      underline-offset-1 underline-white'>Password Generator</h1>
      
      <div className=' flex flex-col w-full  max-w-md rounded-lg mx-auto
       my-10 px-4 py-3 text-red-400 bg-slate-800 shadow-md'>

        <p className=' mb-2 text-center font-mono text-slate-500 
        text-opacity-95'>Get a strong <b>Password</b> right now</p>

        <div className="flex gap-1 ">
          <input type='text' 
            value={password} 
            placeholder='password' 
            readOnly
            ref={passwordRef}
            className='w-full  min-w-20 shrink-1 mr-0 px-3 py-2 rounded-lg ' />
          <button
            onClick={copyPassToClipboard}
            className='rounded-lg bg-slate-500 ml-0px-3 py-2 w-1/6 text-white hover:bg-slate-700 active:bg-slate-800'>
            copy
          </button>
          <button
            onClick={passGenerator}
            className='rounded-lg bg-slate-500 ml-0px-3 py-2 w-1/6 text-white hover:bg-slate-700 active:bg-slate-800'>
            New
          </button>
        </div>
        <div className="flex my-3 flex-wrap gap-3">
          <div className="flex gap-1">
            <input 
            type='range'
            min={8}
            max={70}
            value={length}
            className='cursor-pointer'
            onChange={(e)=>{setLength(e.target.value)}} />
            <label>Length: {length} </label>
          </div>
          <div>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=> {
              setnumberAllowed(prev=>!prev)
            }} />
            <label> Numbers</label>
          </div>
          <div>
            <input
            type='checkbox'
            defaultChecked={numberAllowed}
            onChange={()=> {
              setCharAllowed(prev=>!prev)
            }} />
            <label> Characters</label>
          </div>
        </div>
      </div>


    </>
  )
}

export default App
