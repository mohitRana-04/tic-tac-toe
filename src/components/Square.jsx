import React from 'react'
import "./Square.style.css"

function Square({value}) {
  // console.log(props)
  return (
    <button type='button' className='square' >{value}</button>
  )
}

export default Square