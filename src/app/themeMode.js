import { createSlice } from '@reduxjs/toolkit'

let _themeMode = "light";
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
if(!localStorage.getItem('theme')){
    _themeMode = (prefersDark) ? 'dark' : 'light';
localStorage.setItem('theme', (prefersDark) ? 'dark' : 'light' );
}else{
    
    _themeMode = localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light';
}

export const themeMode = createSlice({
  name: 'themeMode',
  initialState: {
    value: _themeMode,
  },
  reducers: {
    setTheme: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setTheme } = themeMode.actions

export default themeMode.reducer