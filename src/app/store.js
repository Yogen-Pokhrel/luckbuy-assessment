import { configureStore } from '@reduxjs/toolkit'
import dataUploadState from "app/reducer";
import tableData from "app/tableData";

export default configureStore({
  reducer: {
    uploadState : dataUploadState,
    tableData : tableData
  },
})