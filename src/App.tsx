import React, { useReducer } from 'react'

import './App.css'

type CountState = { count: number }

type CountAction =
  | { type: 'PLUS'; payload: number }
  | { type: 'MINUS'; payload: number }
  | { type: 'MULTIPLY'; payload: number }
  | { type: 'DIVIDE'; payload: number }

const countReducer = (state: CountState, action: CountAction): CountState => {
  switch (action.type) {
    case 'PLUS':
      return { count: state.count + action.payload }

    case 'MINUS':
      return { count: state.count - action.payload }

    case 'MULTIPLY':
      return { count: state.count * action.payload }

    case 'DIVIDE':
      return { count: state.count / action.payload }

    default:
      return state
  }
}

const initialState: CountState = { count: 0 }

function App() {
  const [countState, countDispatch] = useReducer(countReducer, initialState)

  return (
    <div className='App'>
      <h3>Count: {countState.count}</h3>

      <div>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => countDispatch({ type: 'PLUS', payload: 2 })}
        >
          PLUS 2
        </button>
      </div>
      <div>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => countDispatch({ type: 'MINUS', payload: 2 })}
        >
          MINUS 2
        </button>
      </div>
      <div>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => countDispatch({ type: 'MULTIPLY', payload: 2 })}
        >
          MULTIPLY 2
        </button>
      </div>
      <div>
        <button
          style={{ cursor: 'pointer' }}
          onClick={() => countDispatch({ type: 'DIVIDE', payload: 2 })}
        >
          DIVIDE 2
        </button>
      </div>
    </div>
  )
}

export default App
