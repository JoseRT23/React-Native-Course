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

type LoginPayload = {
  username: string;
  name: string;
}
type AuthAction = 
| { type: 'logout' }
| { type: 'login', payload: LoginPayload }


const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case 'logout':
            return {
                validating: false,
                token: null,
                username: '',
                name: ''
            }
        case 'login':
            return {
              validating: false,
              token: 'abc234',
              username: action.payload.username,
              name: action.payload.name
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

  const login = () => dispatch({type: 'login', payload: {username: 'test', name: 'test'}});
  const logout = () => dispatch({type: 'logout'});
  

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
      {
        (state.token)
          ? <div className="alert alert-success">Autenticado como: {state.name}</div>
          : <div className="alert alert-danger">No autenticado...</div>
      }

      {
        (state.token)
          ? <button onClick={logout} className="btn btn-danger">Logout</button>
          : <button onClick={login} className="btn btn-primary">Login</button>
      }
    </>
  )
}

export default Login
