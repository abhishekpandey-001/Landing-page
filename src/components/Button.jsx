import React from 'react'

const Button = (props) => {
  return (
    <div>
       <button className="bg-[#0E6F6A] px-5 py-2 rounded-2xl">{props.text}</button>
    </div>
  )
}

export default Button
