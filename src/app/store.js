import { configureStore } from '@reduxjs/toolkit'
import dataUploadState from "app/reducer";
import tableData from "app/tableData";
import themeMode from "app/themeMode";

export default configureStore({
  reducer: {
    uploadState : dataUploadState,
    tableData : tableData,
    themeMode : themeMode
  },
})