import { useDispatch, useSelector } from 'react-redux'

const Counter = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.count)

    const increment = () => {
        dispatch({ type: "Increment" })
    }
    const decrement = () => {
        dispatch({ type: "Decrement" })
    }
    const reset = () => {
        dispatch({ type: "Reset" })
    }

    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>

        </div>
    )
}

export default Counter