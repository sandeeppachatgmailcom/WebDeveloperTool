import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import titleSlice from "./titleSlice";
import fontFamily from "./fontFamily";
import menuBar from "./menuBar"
import sectionSlice from "./section"
import colorSlice from "./colorSlice";
const appStore = configureStore(
    {
        reducer:{
            activeUser:userSlice ,
            title:titleSlice,
            font:fontFamily,
            menubar:menuBar,
            sections: sectionSlice,
            colorpillet:colorSlice
        }
    }
)

export default appStore;

