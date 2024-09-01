import { createSlice } from "@reduxjs/toolkit";

const fontSlice = createSlice(
    {
        name:'font',
        initialState:{
            font:{ font:'font-poppins',discription:" Capture life's most exquisite moments with an artistry that evokes elegance and timeless beauty. Our impeccable attention to detail transforms every frame into a masterpiece, ensuring your memories are preserved with the utmost sophistication. Discover exceptional luxury in every shot." },
            fontLibrary:{
                professional:{ font:'font-poppins',discription:" Capture life's most exquisite moments with an artistry that evokes elegance and timeless beauty. Our impeccable attention to detail transforms every frame into a masterpiece, ensuring your memories are preserved with the utmost sophistication. Discover exceptional luxury in every shot." } ,
                playful:{ font:'font-sans',discription:"Snap, click, wow! Capture life's most magical moments with us, where every photo tells a story worth sharing. Let's turn your everyday adventures into vibrant, unforgettable snapshots!" } , 
                sophisticated:{ font:'font-seriff',discription:"Capture life's most exquisite moments with an artistry that evokes elegance and timeless beauty. Our impeccable attention to detail transforms every frame into a masterpiece, ensuring your memories are preserved with the utmost sophistication. Discover exceptional luxury in every shot." } , 
                Friendly:{ font:'font-roboto',discription:"Capture life's special moments with a team that truly cares about your story. From candid shots to perfectly posed portraits, we’ll help you create memories that last a lifetime. Let’s make your vision a reality together, one snap at a time!" } ,  
                Bold:{ font:'font-semibold font-poppins ',discription:"Capture the world through a fearless lens and make every moment a masterpiece. Redefine creativity with shots that defy the ordinary and inspire awe. Unleash your inner artist and dominate the frame with bold, powerful photography." } ,  
                Quierky:{ font:'font-openSans ',discription:"Capture the world through a different lens! Dive into the unexpected where every click is a quirky adventure. Say cheese and embrace the eccentric—your photos will thank you with unforgettable, vibrant memories." } ,   
                Innovative:{ font:'font-montserrat ',discription:"Capturing the future through the lens, we offer revolutionary photography solutions that redefine visual storytelling. Our cutting-edge technology and artistic vision ensure each shot is a masterpiece. Experience a new dimension of imagery that pushes boundaries and sparks imagination." } ,             }
        },
        reducers:{
            setFont:(state,actions)=>{
                state.font = actions.payload
            }
        }
    }
)

export const {setFont} = fontSlice.actions 
export default fontSlice.reducer
