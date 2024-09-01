import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import titleSlice from "./titleSlice";
import fontFamily from "./fontFamily";
import menuBar from "./menuBar"
const appStore = configureStore(
    {
        reducer:{
            activeUser:userSlice ,
            title:titleSlice,
            font:fontFamily,
            menubar:menuBar
        }
    }
)

export default appStore;

