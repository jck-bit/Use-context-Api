import React, {useReducer} from 'react';
import './App.css';
import One from './components/One';
import Three from './components/Three';
import Two from './components/Two';


export const CountContext = React.createContext()


const initialstate = 0
const reducer = (state, action) =>{
  switch(action){
        case 'increment':
         return state + 1
        case 'decrement':
          return state - 1
        case 'reset':
          return initialstate
          default:
            return state
  }
}


function App() {
  const [count, dispatch] = useReducer(reducer, initialstate)
  return (
    <CountContext.Provider value={{countState: count, countDispatch: dispatch}}>
    <div className="App">
      count {count}

      <One/>
      <Two/>
      <Three/>

    </div>
    </CountContext.Provider>
  );
}

export default App;