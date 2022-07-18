import React, {useState} from 'react'
import Square from './Square'

function Board() {

  // we need to pass an initial state in this
  const [board, setBoard] = useState(Array(9).fill(null));

  const [isXNext, setIsXNext] = useState(false)

  console.log(board)
  const handleSquareClick = (position)=> {

    // to ensure multiple click on same block
    if(board[position]){
      return ;
    }
    // setBoard(position)

    setBoard((prev)=> {
      return prev.map((square, pos)=> {
        if(pos == position){
          // setIsXNext(true);
          return isXNext ? 'X':'O';
        }
        return square
      })
    })
    setIsXNext((prev)=> !prev)
  }

  const renderSquare = position => {
    return (
      <Square
      value={board[position]}
      onClick={()=> handleSquareClick(position)}
      />
    )
  }

  return (
    <div className='board'>

        <div className='board-row'>
          {renderSquare(0)}
          {/* function calling another function */}
            {/* <Square value={board[0]} onClick={()=>{
              handleSquareClick(0)
            }} />
            <Square value={board[1]}/>
            <Square value={board[2]}/> */}
          {/* changed to  */}
          {renderSquare(1)}
          {renderSquare(2)}

        </div>
        <div className='board-row'>
       
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        </div>
        <div className='board-row'>
        
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
        </div>

    </div>
  )
}

export default Board