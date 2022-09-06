import { loginFailure, loginStart, loginSucess } from "./userSlice"
import axios from "axios"
import { publicRequest } from "../requestMethod"

export const login = async (dispatch, user) => {

    dispatch(loginStart())

    try {
        const res = await publicRequest.post("/auth/login", user)

        dispatch(loginSucess(res.data))

    } catch (error) {

        dispatch(loginFailure(error))
    }
}