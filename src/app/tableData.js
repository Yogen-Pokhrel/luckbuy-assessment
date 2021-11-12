import { createSlice } from '@reduxjs/toolkit'

export const tableData = createSlice({
  name: 'tableData',
  initialState: {
    value: "No Data",
  },
  reducers: {
    set: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { set } = tableData.actions

export default tableData.reducer