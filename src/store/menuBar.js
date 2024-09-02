import { createSlice } from "@reduxjs/toolkit";

const menuBarSlice = createSlice({
    name:'menuBar',
    initialState:{
        seletedMenu:{index:0,name:'site info'},
        menulist: [{index:0,name:'Site info'},{index:1,name:'Homepage'},{index:2,name:'Colors'},{index:3,name:'Fonts'}]
    },
    reducers:{
        nextMenu:(state,actions)=>{
            state.seletedMenu =actions.payload 
        },
        prevMenu:(state,actions)=>{
            state.seletedMenu =actions.payload 
        }
    }
})

export const {nextMenu,prevMenu} = menuBarSlice.actions
export default menuBarSlice.reducer