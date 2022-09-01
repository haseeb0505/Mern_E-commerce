import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../redux/apiCalls'
import "./login.css"
import Spinner from "../../layout/Spinner"



function Login() {

    const [credentials, setCredentials] = React.useState({
        username: undefined,
        password: undefined
    })
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch()
    const { isFetching, error } = useSelector(state => state.user)

    const handleChange = (e) => {
        setCredentials(prev => ({ ...prev, [e.target.id]: e.target.value }))
    }

    const handleClick = async (e) => {

        e.preventDefault()
        login(dispatch, credentials)

    }
    useEffect(() => {
        const loadData = async () => {

            // Wait for two second
            await new Promise((r) => setTimeout(r, 2000));

            // Toggle loading state
            setLoading((loading) => !loading);
        };

        loadData();
    }, [])


    if (loading) {
        return <div><Spinner /></div>
    } else {
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
                            {error?.response?.data.message}
                        </span>
                    }
                </div>
            </div>

        )
    }
}

export default Login