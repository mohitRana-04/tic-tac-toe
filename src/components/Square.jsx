import React from 'react'
import "./Square.style.css"

function Square({value, onClick}) {
  // console.log(props)
  return (
    <button type='button' className='square' onClick={onClick}>
      {value}
    </button>
  )
}

export default Square