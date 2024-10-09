import { createSlice } from "@reduxjs/toolkit";


// it will tell the user is authenticated or not 

const initialState = {
    status: false,
    userData: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers:{ 
        login: (state, action) => {
            state.status = true;
            state.userData = action.payload;
        },
        logout:(state)=>{
            state.status = false;
            state.userData = null;
        }

    }

})

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;