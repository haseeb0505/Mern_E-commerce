import { loginFailure, loginStart, loginSucess } from "./userSlice"
import axios from "axios"

export const login = async (dispatch, user) => {

    dispatch(loginStart())

    try {
        const res = await axios.post("/auth/login", user)

        dispatch(loginSucess(res.data))

    } catch (error) {

        dispatch(loginFailure(error))
    }
}