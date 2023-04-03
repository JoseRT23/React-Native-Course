import { useEffect, useReducer } from "react"

interface AuthState {
    validating: boolean,
    token: string | null,
    username: string,
    name: string
}

const initialState = {
    validating: true,
    token: null,
    username: '',
    name: ''
}

type AuthAction = { type: 'logout' }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: ''
            }
    
        default:
            return state;
    }
}

const Login = () => {

  const [state, dispatch] = useReducer(authReducer, initialState);

  useEffect(() => {
    setTimeout(() => {
        dispatch({type: 'logout'})
    }, 1500)
  }, [])

  if (state.validating) {
    return (
        <>
           <div className="alert alert-info">Validando...</div>
        </>
    )
  }
  

  return (
    <>
      <h3>Login</h3>
      <div className="alert alert-danger">No autenticado...</div>
      <div className="alert alert-success">Autenticado...</div>

      <button className="btn btn-primary">Login</button>
      <button className="btn btn-danger">Logout</button>
    </>
  )
}

export default Login
