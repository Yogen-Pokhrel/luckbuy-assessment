import React from 'react'
import ReactDataTable, {createTheme}  from 'react-data-table-component';


const DataTable = ({loadUploader, tableData, ...rest}) => {

    const columns = [
        {
            name: 'Date',
            selector: row => row.date,
            sortable: true,
        },
        {
            name: 'Name',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Email',
            selector: row => row.email,
            sortable: true,
        },
    ];

    const customStyles = {
        headCells: {
            style: {
                backgroundColor : "#000000",
                color: '#ffffff'
            }
        }
    }

    createTheme('solarized', {
        text: {
          primary: '#268bd2',
          secondary: '#2aa198',
        },
        background: {
          default: '#002b36',
        },
        context: {
          background: '#cb4b16',
          text: '#FFFFFF',
        },
        divider: {
          default: '#073642',
        },
        action: {
          button: 'rgba(0,0,0,.54)',
          hover: 'rgba(0,0,0,.08)',
          disabled: 'rgba(0,0,0,.12)',
        },
      }, 'dark')

    
    let data = [];
    if (tableData && typeof tableData === "object" && tableData.length > 0){
        tableData.map((dt,index) => {
            let rowData = dt.data;
            if(index === 0 || rowData[0] === "") return false;
            let _dt = {
                id: index,
                date: rowData[0],
                name: rowData[1] + " " + rowData[2],
                email: rowData[3]
            }
            data.push(_dt);
        });
    }else{

    }

console.log(data);
  return (
      <>
    <div className="d-block w-100 breadcrumb-wrapper ">
      <h3 className="font-size-normal mb-0"><i className="bi bi-pie-chart-fill"></i> Data Management <button type="button" className="btn-primary rounded-0 btn-sm ms-2" onClick={loadUploader}>Upload Data</button></h3>
    </div>
    <div className="table-wrapper mt-3">
        <ReactDataTable
            columns={columns}
            data={data}
            selectableRows
            pagination
            customStyles={customStyles}
            theme="solarized"
        />
    </div>
    </>
  )
}

export default DataTable
