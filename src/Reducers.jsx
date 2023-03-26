import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import Auth from './Auth'
import Counter from './Counter'

const Reducers = () => {


    const initialCounterState = {
        count: 0
    }
    const initialAuthState = {
        isAuth: false
    }

    const CounterReducer = (state = initialCounterState, action) => {
        switch (action.type) {
            case "Increment":
                return { count: state.count + 1 }
            case "Decrement":
                return { count: state.count - 1 }
            case "Reset":
                return { count: 0 }
            default:
                return state
        }
    }

    const AuthReducer = (state = initialAuthState, action) => {
        switch (action.type) {
            case "Login":
                return { isAuth: true }
            case "Logout":
                return { isAuth: false }
            default:
                return state
        }
    }

    const rootReducer = combineReducers({
        count: CounterReducer,
        auth: AuthReducer
    })

    const store = createStore(rootReducer)

    return (
        <div>
            <Provider store={store}>
                <Auth />
                <Counter />

            </Provider>
        </div>
    )
}

export default Reducers