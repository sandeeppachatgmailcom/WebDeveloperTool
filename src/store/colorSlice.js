import { createSlice } from "@reduxjs/toolkit";

const colorSlice = createSlice({
    name: 'colorSlice',
    initialState: {
        colour:{
            titleColour: { bg: 'bg-zinc-900', text: 'text-zinc-900' },
            buttonColour: { bg: 'bg-zinc-300', text: 'text-zinc-300' },
            bgColour: { bg: 'bg-white', text: 'text-white' },
          },
        colourLibrary: {
            professional: [
              {
                titleColour: { bg: 'bg-zinc-900', text: 'text-zinc-900' },
                buttonColour: { bg: 'bg-zinc-300', text: 'text-zinc-300' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-zinc-100', text: 'text-zinc-100' },
                buttonColour: { bg: 'bg-green-600', text: 'text-green-600' },
                bgColour: { bg: 'bg-stone-200', text: 'text-stone-200' },
              },
              {
                titleColour: { bg: 'bg-zinc-800', text: 'text-zinc-800' },
                buttonColour: { bg: 'bg-slate-700', text: 'text-slate-700' },
                bgColour: { bg: 'bg-neutral-200', text: 'text-neutral-200' },
              },
              {
                titleColour: { bg: 'bg-sky-700', text: 'text-sky-700' },
                buttonColour: { bg: 'bg-blue-300', text: 'text-blue-300' },
                bgColour: { bg: 'bg-gray-200', text: 'text-gray-200' },
              },
            ],
            Playful: [
              {
                titleColour: { bg: 'bg-purple-300', text: 'text-purple-300' },
                buttonColour: { bg: 'bg-red-500', text: 'text-red-500' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-amber-400', text: 'text-amber-400' },
                buttonColour: { bg: 'bg-blue-700', text: 'text-blue-700' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-pink-300', text: 'text-pink-300' },
                buttonColour: { bg: 'bg-blue-400', text: 'text-blue-400' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-cyan-300', text: 'text-cyan-300' },
                buttonColour: { bg: 'bg-teal-500', text: 'text-teal-500' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
            ],
            Sophisticated: [
              {
                titleColour: { bg: 'bg-stone-300', text: 'text-stone-300' },
                buttonColour: { bg: 'bg-stone-600', text: 'text-stone-600' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-rose-300', text: 'text-rose-300' },
                buttonColour: { bg: 'bg-emerald-700', text: 'text-emerald-700' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-purple-100', text: 'text-purple-100' },
                buttonColour: { bg: 'bg-stone-500', text: 'text-stone-500' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
              {
                titleColour: { bg: 'bg-olive-500', text: 'text-olive-500' },
                buttonColour: { bg: 'bg-stone-300', text: 'text-stone-300' },
                bgColour: { bg: 'bg-white', text: 'text-white' },
              },
            ],
            Friendly: [
              {
                titleColour: { bg: 'bg-cyan-700', text: 'text-cyan-700' },
                buttonColour: { bg: 'bg-teal-800', text: 'bg-teal-800' },
                bgColour: { bg: 'bg-white', text: 'bg-white' },
              },
              {
                titleColour: { bg: 'bg-lime-400', text: 'text-lime-400' },
                buttonColour: { bg: 'bg-green-300', text: 'bg-green-300' },
                bgColour: { bg: 'bg-white', text: 'bg-white' },
              },
              {
                titleColour: { bg: 'bg-purple-300', text: 'text-purple-300' },
                buttonColour: { bg: 'bg-blue-500', text: 'bg-blue-500' },
                bgColour: { bg: 'bg-white', text: 'bg-white' },
              },
              {
                titleColour: { bg: 'bg-orange-300', text: 'text-orange-300' },
                buttonColour: { bg: 'bg-red-500', text: 'bg-red-500' },
                bgColour: { bg: 'bg-white', text: 'bg-white' },
              },
            ],
            Bold: [
              {
                titleColour: { bg: 'bg-orange-300', text: 'text-orange-300' },
                buttonColour: { bg: 'bg-orange-600', text: 'text-orange-600' },
                bgColour: { bg: 'bg-black', text: 'text-black' },
              },
              {
                titleColour: { bg: 'bg-gray-400', text: 'text-gray-400' },
                buttonColour: { bg: 'bg-slate-600', text: 'text-slate-600' },
                bgColour: { bg: 'bg-blue-700', text: 'text-blue-700' },
              },
              {
                titleColour: { bg: 'bg-rose-400', text: 'text-rose-400' },
                buttonColour: { bg: 'bg-rose-800', text: 'text-rose-800' },
                bgColour: { bg: 'bg-pink-300', text: 'text-pink-300' },
              },
              {
                titleColour: { bg: 'bg-white', text: 'text-white' },
                buttonColour: { bg: 'bg-violet-400', text: 'text-violet-400' },
                bgColour: { bg: 'bg-gray-600', text: 'text-gray-600' },
              },
            ],
            Quirky: [
              {
                titleColour: { bg: 'bg-lime-300', text: 'text-lime-300' },
                buttonColour: { bg: 'bg-sky-100', text: 'text-sky-100' },
                bgColour: { bg: 'bg-red-400', text: 'text-red-400' },
              },
              {
                titleColour: { bg: 'bg-yellow-300', text: 'text-yellow-300' },
                buttonColour: { bg: 'bg-pink-400', text: 'text-pink-400' },
                bgColour: { bg: 'bg-purple-500', text: 'text-purple-500' },
              },
              {
                titleColour: { bg: 'bg-gray-200', text: 'text-gray-200' },
                buttonColour: { bg: 'bg-lime-300', text: 'text-lime-300' },
                bgColour: { bg: 'bg-gray-500', text: 'text-gray-500' },
              },
              {
                titleColour: { bg: 'bg-yellow-400', text: 'text-yellow-400' },
                buttonColour: { bg: 'bg-red-500', text: 'text-red-500' },
                bgColour: { bg: 'bg-rose-700', text: 'text-rose-700' },
              },
            ],
            Innovative: [
              {
                titleColour: { bg: 'bg-gray-300', text: 'text-gray-300' },
                buttonColour: { bg: 'bg-orange-600', text: 'text-orange-600' },
                bgColour: { bg: 'bg-black', text: 'text-black' },
              },
              {
                titleColour: { bg: 'bg-stone-300', text: 'text-stone-300' },
                buttonColour: { bg: 'bg-slate-500', text: 'text-slate-500' },
                bgColour: { bg: 'bg-emerald-600', text: 'text-emerald-600' },
              },
              {
                titleColour: { bg: 'bg-white', text: 'text-white' },
                buttonColour: { bg: 'bg-yellow-500', text: 'text-yellow-500' },
                bgColour: { bg: 'bg-gray-600', text: 'text-gray-600' },
              },
              {
                titleColour: { bg: 'bg-slate-400', text: 'text-slate-400' },
                buttonColour: { bg: 'bg-blue-500', text: 'text-blue-500' },
                bgColour: { bg: 'bg-violet-600', text: 'text-violet-600' },
              },
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