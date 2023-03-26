import { useDispatch, useSelector } from 'react-redux'

const Auth = () => {
    const dispatch = useDispatch();
    const state = useSelector(store => store.auth)

    const login = () => {
        dispatch({ type: "Login" })
    }
    const logout = () => {
        dispatch({ type: "Logout" })
    }

    return (
        <div>
            <h2>Login: {state.isAuth ? 'true' : 'false'}</h2>
            <button onClick={login}>Login</button>
            <button onClick={logout}>Logout</button>
        </div>
    )
}

export default Auth