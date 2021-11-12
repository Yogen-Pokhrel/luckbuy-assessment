import { createSlice } from '@reduxjs/toolkit'

export const dataUploadState = createSlice({
  name: 'uploadState',
  initialState: {
    value: false,
  },
  reducers: {
    toggleState: (state) => {
      state.value = !state.value
    }
  },
})

// Action creators are generated for each case reducer function
export const { toggleState } = dataUploadState.actions

export default dataUploadState.reducer