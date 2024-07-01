import React from 'react'

function Button({ btnBgColor = "bg-green-600", btnText, onClick }) {
  
  return (
    <div>
        <button
            type = "button"
            className = {`rounded-md ${btnBgColor} px-3 py-2 text-sm font-semibold text-white shadow-sm`}
            onClick = {onClick}
        >
          {btnText}
        </button>
    </div>
  )
}

export default Button
