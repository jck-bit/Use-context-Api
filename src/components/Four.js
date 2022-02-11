import React, {useContext} from 'react'
import { CountContext } from '../App'

const Four = () => {
  const countContext = useContext(CountContext)
  return (
    <div>
      
        component Four or D
        <button onClick={() =>countContext.countDispatch('increment')}>Increment</button>
        <button onClick={() =>countContext.countDispatch('decrement')}>Decrement</button>
        <button onClick={() =>countContext.countDispatch('reset')}>Reset</button>
    </div>
  )
}

export default Four