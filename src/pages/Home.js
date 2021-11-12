import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {toggleState} from "app/reducer";
import {set} from "app/tableData";
import DataTable from 'components/DataTable';
import DataUpload from 'components/DataUpload';

const Home = () => {
  const toggleDataUpload = useSelector((state) => state.uploadState.value)
  const tableData = useSelector((state) => state.tableData.value)
  const currentTheme = useSelector((state) => state.themeMode.value)
  const dispatch = useDispatch();

  const chooseComponentToRender = () => {
   dispatch(toggleState());
  }

  const setTableData = (dt) =>{
    dispatch(set(dt));
  }

  console.log("In Home Component",tableData);
  return (
  <>
    {
      (toggleDataUpload) ? <DataUpload loadTable={chooseComponentToRender}  setTableData={setTableData} /> : <DataTable tableData={tableData} currentTheme={currentTheme} loadUploader={chooseComponentToRender}  />
    }
  </>
  )
}

export default Home
