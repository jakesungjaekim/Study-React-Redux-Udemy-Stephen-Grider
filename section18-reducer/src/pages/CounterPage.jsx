import { useReducer } from 'react'
import Button from '../components/Button';
import Panel from '../components/Panel';

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const SET_VALUE_TO_ADD = 'chnage_value_to_add';
const ADD_VALUE_TO_COUNT = 'add_value_to_count';

const reducer = (state, action) => {
  switch(action.type) {
    
    case INCREMENT_COUNT: 
    return {
          ...state,
          count: state.count + 1
        }
    case DECREMENT_COUNT:
      return {
        ...state, 
        count: state.count - 1
      }
    case SET_VALUE_TO_ADD:
      return {
        ...state,
        valueToAdd: action.payload,
      }
    case ADD_VALUE_TO_COUNT:
      return {
        ...state,
        count: state.count + state.valueToAdd,
        valueToAdd: 0
      }
    default: 
      return state; // 방법 1
      // throw new Error('unexpected action type:' + action.type); //  방법 2
  }

  // OLD WAY OF USE REDUCER
  // if( action.type === INCREMEsNT_COUNT) {
  //   return {
  //     ...state,
  //     count: state.count + 1
  //   }
  // }

  // if( action.type === SET_VALUE_TO_ADD) {
    // return {
    //   ...state,
    //   valueToAdd: action.payload,
    // }
  // }
  
  // return state;  
}

const CounterPage = ({ initialCount }) => {
  // const [count, setCount] = useState(initialCount);
  // const [valueToAdd, setValueToAdd] = useState(0);

  const [state, dispatch] = useReducer(reducer, {
    count: initialCount,
    valueToAdd: 0
  })

  console.log(state);

  const increment = () => {
    dispatch({
      type: INCREMENT_COUNT
    })
  }

  const decrement = () => {
    dispatch({
      type: DECREMENT_COUNT
    })
  }

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    dispatch({
      type: SET_VALUE_TO_ADD,
      payload: value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch({
      type: ADD_VALUE_TO_COUNT
    })
  }

  return (
    <Panel className="m-3">
      <h1 className='text-lg'>Current Count : { state.count }</h1>
      <div className='flex flex-row'>
        <Button success onClick={increment}>Increment</Button>
        <Button success onClick={decrement}>Decrement</Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Add a lot !</label>
        <input 
          value={state.valueToAdd || ''}
          onChange={handleChange}
          type="number" className='p-1 m-3 border border-gray-300 bg-gray-50'/>
        <Button success >Add it</Button>
      </form>
    </Panel>
  )
}

export default CounterPage
