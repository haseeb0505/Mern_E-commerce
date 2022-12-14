import { createSlice } from "@reduxjs/toolkit"

const UserSlice = createSlice({
    name: "user",
    initialState: {
        currentUser: null,
        isFetching: false,
        error: false
    },
    reducers: {
        loginStart: (state) => {
            state.isFetching = true;
        },
        loginSucess: (state, action) => {
            state.isFetching = false;
            state.currentUser = action.payload;
            state.error = false

        },
        loginFailure: (state) => {
            state.isFetching = false;
            state.error = true
        }
    }
})

export const { loginStart, loginSucess, loginFailure } = UserSlice.actions
export default UserSlice.reducer