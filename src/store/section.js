import { createSlice } from "@reduxjs/toolkit";

const sectionSlice = createSlice(
    {
        name:'sections',
        initialState:{
            activeSections:{
                intro:true,
                products:false,
                services:false,
                appoinment:false,
                digital:false,
                about:false,
                social:false,
                forms:false,
                footer:false,
                
            } 
            
        },
        reducers:{
            editSections:(state,actions)=>{
                state.activeSections = actions.payload
            }
        }
    }
)

export default sectionSlice.reducer
export const {editSections} = sectionSlice.actions 