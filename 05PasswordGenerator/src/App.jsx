import { useCallback, useEffect, useRef, useState } from 'react'


function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  //useRef Hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) str += "0123456789"
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`"

    for (let i = 0; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }
    setPassword(pass)

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    // passwordRef.current?.setSelectionRange(0, 5);
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(() => {
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
 
  return (
    <>
      <div className="w-full max-w-lg mx-auto shadow-md rounded-lg px-10 py-10 my-8 bg-gray-800">
        <h1 className='text-white text-center my-3'>Password generator</h1>
        
        <div className="flex w-full items-center space-x-1 ">
          <input
            className="flex h-10 w-full rounded-md border border-black/30 bg-white-500 px-3 py-2 text-sm placeholder:text-white-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
            type="text"
            value = {password}
            placeholder="Password"
            readOnly
            ref= {passwordRef}
          />
          <button
            type="button"
            className="rounded-md bg-sky-800 px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            onClick={copyPasswordToClipboard}
          >
            Copy
          </button>
        </div>

        <div className='flex text-sm gap-x-2 py-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={6}
            max={20}
            value={length}
            className='cursor-pointer'
            onChange={(e) => {setLength(e.target.value)}}
            />
            <label className="text-white">Length: {length} </label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={numberAllowed}
                id="numberInput"
                onChange={() => {
                    setNumberAllowed((prev) => !prev);
                }}
            />
            <label className="text-white" htmlFor="numberInput">Numbers</label>
          </div>

          <div className="flex items-center gap-x-1">
            <input
                type="checkbox"
                defaultChecked={charAllowed}
                id="numberInput"
                onChange={() => {
                    setCharAllowed((prev) => !prev);
                }}
            />
            <label className="text-white" htmlFor="numberInput">Characters</label>
          </div>

        </div>
      </div>
    </>
  )
}

export default App
