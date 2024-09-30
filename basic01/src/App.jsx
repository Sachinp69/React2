import { useState } from 'react'

function App() {
  const [color, setColor] = useState("black")
  return (
    <>
    <div className='w-full h-screen duration-150 justify-center'
    style={{backgroundColor:color}}>

      <div className="fixed flex flex-wrap justify-center
       bottom-10 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-2 
        px-2 py-2 bg-white rounded-xl">
          <button onClick={()=>setColor('red')} 
          className='outline-none px-4 py-1 
          rounded-full bg-red-600 text-white shadow-lg'
          >red</button>

          <button onClick={()=>setColor('orange')}
          className='outline-none px-4 py-1 
          rounded-full bg-orange-500 text-white shadow-lg'
          >orange</button>

          <button onClick={()=>setColor('cyan')}
          className='outline-none px-4 py-1 
          rounded-full bg-cyan-400 text-white shadow-lg'
          >cyan</button>

          <button onClick={()=>setColor('blue')}
          className='outline-none px-4 py-1 
          rounded-full bg-blue-800 text-white shadow-lg'
          >blue</button>

          <button onClick={()=>setColor('purple')}
          className='outline-none px-4 py-1 
          rounded-full bg-purple-600 text-white shadow-lg'
          >purple</button>

          <button onClick={()=>setColor('fuchsia')}
          className='outline-none px-4 py-1 
          rounded-full bg-fuchsia-800 text-white shadow-lg'
          >fuchsia</button>

          <button onClick={()=>setColor('lime')}
          className='outline-none px-4 py-1 
          rounded-full bg-lime-500 text-white shadow-lg'
          >lime</button>

          <button onClick={()=>setColor('green')}
          className='outline-none px-4 py-1 
          rounded-full bg-green-600 text-white shadow-lg'
          >green</button>

          <button onClick={()=>setColor('#50c878')}
          className='outline-none px-4 py-1 
          rounded-full bg-emerald-500 text-white shadow-lg'
          >emerald</button>

          <button onClick={()=>setColor('#708090')}
          className='outline-none px-4 py-1 
          rounded-full bg-slate-500 text-white shadow-lg'
          >slate</button>
        </div>
      </div>
    </div>

    </>
  )
}

export default App
