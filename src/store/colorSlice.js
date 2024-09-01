import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: 'colorSlice',
    initialState: {
        colour: {
            titleColour: 'zinc-100',
            buttonColour: 'green-600',
            bgColour: 'stone-200'
        },
        colourLibrary: {
            professional: [
                {
                    titleColour: 'zinc-900',
                    buttonColour: 'zinc-300',
                    bgColour: 'white'
                },
                {
                    titleColour: 'zinc-100',
                    buttonColour: 'green-600',
                    bgColour: 'stone-200'
                },
                {
                    titleColour: 'zinc-800',
                    buttonColour: 'slate-700',
                    bgColour: 'neutral-200'
                },
                {
                    titleColour: 'sky-700',
                    buttonColour: 'blue-300',
                    bgColour: 'gray-200'
                }

            ],
            Playful: [
                {
                    titleColour: 'purple-300',
                    buttonColour: 'red-500',
                    bgColour: 'white'
                },
                {
                    titleColour: 'amber-400',
                    buttonColour: 'blue-700',
                    bgColour: 'white'
                },
                {
                    titleColour: 'pink-300',
                    buttonColour: 'blue-400',
                    bgColour: 'white'
                },
                {
                    titleColour: 'cyan-300',
                    buttonColour: 'teal-500',
                    bgColour: 'white'
                }
            ],
            Sophisticated: [
                {
                    titleColour: 'stone-300',
                    buttonColour: 'stone-600',
                    bgColour: 'white'
                },
                {
                    titleColour: 'rose-300',
                    buttonColour: 'emerald-700',
                    bgColour: 'white'
                },
                {
                    titleColour: 'purple-100',
                    buttonColour: 'stone-500',
                    bgColour: 'white'
                },
                {
                    titleColour: 'olive-500',
                    buttonColour: 'stone-300',
                    bgColour: 'white'
                }
            ],
            Friendly: [
                {
                    titleColour: 'cyan-700',
                    buttonColour: 'teal-800',
                    bgColour: 'white'
                },
                {
                    titleColour: 'lime-400',
                    buttonColour: 'green-300',
                    bgColour: 'white'
                },
                {
                    titleColour: 'purple-300',
                    buttonColour: 'blue-500',
                    bgColour: 'white'
                },
                {
                    titleColour: 'orange-300',
                    buttonColour: 'red-500',
                    bgColour: 'white'
                }
            ],
            Bold: [
                {
                    titleColour: 'orange-300',
                    buttonColour: 'orange-600',
                    bgColour: 'black'
                },
                {
                    titleColour: 'gray-400',
                    buttonColour: 'slate-600',
                    bgColour: 'blue-700'
                },
                {
                    titleColour: 'rose-400',
                    buttonColour: 'rose-800',
                    bgColour: 'pink-300'
                },
                {
                    titleColour: 'white',
                    buttonColour: 'violet-400',
                    bgColour: 'gray-600'
                }
            ],
            Quirky: [
                {
                    titleColour: 'lime-300',
                    buttonColour: 'sky-100',
                    bgColour: 'red-400'
                },
                {
                    titleColour: 'yellow-300',
                    buttonColour: 'pink-400',
                    bgColour: 'purple-500'
                },
                {
                    titleColour: 'gray-200',
                    buttonColour: 'lime-300',
                    bgColour: 'gray-500'
                },
                {
                    titleColour: 'yellow-400',
                    buttonColour: 'red-500',
                    bgColour: 'rose-700'
                }
            ],
            Innovative: [
                {
                    titleColour: 'gray-300',
                    buttonColour: 'orange-600',
                    bgColour: 'black'
                },
                {
                    titleColour: 'stone-300',
                    buttonColour: 'slate-500',
                    bgColour: 'emerald-600'
                },
                {
                    titleColour: 'white',
                    buttonColour: 'yellow-500',
                    bgColour: 'gray-600'
                },
                {
                    titleColour: 'slate-400',
                    buttonColour: 'blue-500',
                    bgColour: 'violet-600'
                }
            ]

        }
    },
    reducers: {
        changeTheme: (state, actions) => {
            state.colour = actions.payload
        }
    }
})

export default colorSlice.reducer
export const {changeTheme} =  colorSlice.actions