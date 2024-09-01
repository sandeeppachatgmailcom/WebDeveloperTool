import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name:'user',
    initialState:{
        name:'sandeep'
    },
    reducers:{
        login:(state)=>{
            state.user = {
                name:'sandeep',
                role:'user'
            }
        },
        logout:(state)=>{
            state.user = null
        }
    }
})

export const {login,logout} = userSlice.actions
export default userSlice.reducer