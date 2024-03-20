import { useState } from 'react'
import './App.css'

function App() {

  const [color, setColor] = useState("magenta")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>

        <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
         
          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'red' }} onClick={() => setColor("red")}>RED</button>
           
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'green' }} onClick={() => setColor("green")}>GREEN</button>
            
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'blue' }} onClick={() => setColor("blue")}>BLUE</button>
            
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'yellow' }} onClick={() => setColor("yellow")}>YELLOW</button>
            
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'purple' }} onClick={() => setColor("purple")}>PURPLE</button>
            
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'cyan' }} onClick={() => setColor("cyan")}>CYAN</button>
            
            <button className="font-semibold outline-none px-4 py-1 rounded-full text-black shadow-lg" 
            style={{ backgroundColor: 'magenta' }} onClick={() => setColor("magenta")}>MAGENTA</button>
          
          </div>
        
        </div>

      </div>
    </>
  )
}

export default App
