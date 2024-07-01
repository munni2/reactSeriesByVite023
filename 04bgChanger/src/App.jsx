import { useState } from 'react'
import Button from './components/Button'


function App() {
  const colors = ['bg-green-500', 'bg-pink-500', 'bg-sky-500', 'bg-cyan-800', 'bg-red-700', 'bg-zinc-500', 'bg-slate-400']
  // const [color, setColor] = useState("olive")
  const [currentColor, setCurrentColor] = useState("bg-purple-400");
  

  return (
    <>
    <div className={`w-full h-screen duration-200 ${currentColor} flex items-center justify-center`} >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          {colors.map((bgColor, index) => (
            <Button 
              key = {index} 
              btnBgColor = {bgColor}
              btnText = {bgColor} 
              onClick={() => setCurrentColor(bgColor)}
            />
          ))}
        </div>
      </div>
    </div>
    </>
  )
}

export default App
