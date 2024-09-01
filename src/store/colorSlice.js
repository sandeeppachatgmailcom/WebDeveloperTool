import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: 'colorSlice',
    initialState: {
        colour: {
            titleColour: 'text-zinc-100',
            buttonColour: 'bg-green-600',
            bgColour: 'bg-stone-200'
        },
        colourLibrary: {
            professional: [
                {
                    titleColour: 'text-zinc-900',
                    buttonColour: 'bg-zinc-300',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-zinc-100',
                    buttonColour: 'bg-green-600',
                    bgColour: 'bg-stone-200'
                },
                {
                    titleColour: 'text-zinc-800',
                    buttonColour: 'bg-slate-700',
                    bgColour: 'bg-neutral-200'
                },
                {
                    titleColour: 'text-sky-700',
                    buttonColour: 'bg-blue-300',
                    bgColour: 'bg-gray-200'
                }

            ],
            Playful: [
                {
                    titleColour: 'text-purple-300',
                    buttonColour: 'bg-red-500',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-amber-400',
                    buttonColour: 'bg-blue-700',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-pink-300',
                    buttonColour: 'bg-blue-400',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-cyan-300',
                    buttonColour: 'bg-teal-500',
                    bgColour: 'bg-white'
                }
            ],
            Sophisticated: [
                {
                    titleColour: 'text-stone-300',
                    buttonColour: 'bg-stone-600',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-rose-300',
                    buttonColour: 'bg-emerald-700',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-purple-100',
                    buttonColour: 'bg-stone-500',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-olive-500',
                    buttonColour: 'bg-stone-300',
                    bgColour: 'bg-white'
                }
            ],
            Friendly: [
                {
                    titleColour: 'text-cyan-700',
                    buttonColour: 'bg-teal-800',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-lime-400',
                    buttonColour: 'bg-green-300',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-purple-300',
                    buttonColour: 'bg-blue-500',
                    bgColour: 'bg-white'
                },
                {
                    titleColour: 'text-orange-300',
                    buttonColour: 'bg-red-500',
                    bgColour: 'bg-white'
                }
            ],
            Bold: [
                {
                    titleColour: 'text-orange-300',
                    buttonColour: 'bg-orange-600',
                    bgColour: 'bg-black'
                },
                {
                    titleColour: 'text-gray-400',
                    buttonColour: 'bg-slate-600',
                    bgColour: 'bg-blue-700'
                },
                {
                    titleColour: 'text-rose-400',
                    buttonColour: 'bg-rose-800',
                    bgColour: 'bg-pink-300'
                },
                {
                    titleColour: 'text-white',
                    buttonColour: 'bg-violet-400',
                    bgColour: 'bg-gray-600'
                }
            ],
            Quirky: [
                {
                    titleColour: 'text-lime-300',
                    buttonColour: 'bg-sky-100',
                    bgColour: 'bg-red-400'
                },
                {
                    titleColour: 'text-yellow-300',
                    buttonColour: 'bg-pink-400',
                    bgColour: 'bg-purple-500'
                },
                {
                    titleColour: 'text-gray-200',
                    buttonColour: 'bg-lime-300',
                    bgColour: 'bg-gray-500'
                },
                {
                    titleColour: 'text-yellow-400',
                    buttonColour: 'bg-red-500',
                    bgColour: 'bg-rose-700'
                }
            ],
            Innovative: [
                {
                    titleColour: 'text-gray-300',
                    buttonColour: 'bg-orange-600',
                    bgColour: 'bg-black'
                },
                {
                    titleColour: 'text-stone-300',
                    buttonColour: 'bg-slate-500',
                    bgColour: 'bg-emerald-600'
                },
                {
                    titleColour: 'text-white',
                    buttonColour: 'bg-yellow-500',
                    bgColour: 'bg-gray-600'
                },
                {
                    titleColour: 'text-slate-400',
                    buttonColour: 'bg-blue-500',
                    bgColour: 'bg-violet-600'
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