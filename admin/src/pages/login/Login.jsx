import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import "./login.css"



function Login() {

    const [credentials, setCredentials] = React.useState({
        username: undefined,
        password: undefined
    })
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {

        e.preventDefault()
        login(dispatch, credentials)
    }

    return (
        <div className='Login'>
            <div className="lContainer">
                <input type="text" placeholder='Username' id='username' className="lInput" onChange={handleChange} />
                <input type="password" placeholder='Password' id='password' className="lInput" onChange={handleChange} />
                <button disabled={isFetching} className="lButton" onClick={handleClick}>
                    Login
                </button>
                {error &&
                    <span>
                        {error?.response.data.message}
                    </span>
                }
            </div>
        </div>
    )
}

export default Login