import { createSlice } from "@reduxjs/toolkit";

const titleSlice  = createSlice(
    {
        name:'titleSlice',
        initialState:{
            title:'Your site title'
        },
        reducers:{
            changeTitle:(state,actions)=>{
                state.title = actions.payload?actions.payload:'Your site title'  
            }
        }
    }
)

export default titleSlice.reducer
export const {changeTitle} = titleSlice.actions 