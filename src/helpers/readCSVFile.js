import React, { Component } from 'react';
import { CSVReader } from 'react-papaparse';

export default class ReadCSVFile extends Component {
  constructor(props){
    super(props);
    this.uploadData = this.uploadData.bind(this);
    this.state = {
      tableData: "No Data",
      errors: ""
    }
  }
  handleOnDrop = (data) => {
    this.setState({tableData: data});
    this.validateData(this.state.tableData);
  };

  validateData(data){
    if(!data || data === "No Data"){this.displayErrors(); return false;}
    try{
      let headersData = data[0];
      if(!headersData || !headersData.data){this.displayErrors(); return false;}
      headersData = headersData.data;
      if(headersData[0].toLowerCase() !== "date" || headersData[1].toLowerCase() !== "first name" || headersData[2].toLowerCase() !== "last name" || headersData[3].toLowerCase() !== "email"){
        this.displayErrors();
        return false;
      }else{
        return true;
      }
    }catch(err){
      this.displayErrors();
      return false;
    }
  }

  displayErrors(){
    if(this.state.tableData === "No Data"){
      this.setState({errors: "No file has been uploaded. Please choose a file to upload"})
    }else{
    let downloadLink = `<a href="https://blufzer.com/test.csv" target="_blank" download="Sample Upload Docs" class="text-underline" >Here</a>`;
    this.setState({errors: "Uploaded file is not supported or doesnot match with the sample file. Please download the file by clicking "+downloadLink});
    }
  }

  uploadData(){
    if(this.validateData(this.state.tableData)){
      //perform upload to server or any
    this.props.setTableData(this.state.tableData);
    this.props.loadTable();
    }
  }

  handleOnError = (err, file, inputElem, reason) => {
    console.log(err);
  };

  handleOnRemoveFile = (data) => {
    this.setState({tableData: "No Data"});
  };

  render() {
    return (
      <>
      <div className="upload-wrapper">
        <div className="content">
        <div className="inner">
            <div className="header mb-5">
                <h3 className="font-size-lg font-weight-600 mb-0">Upload data</h3>
                <span className="text-muted font-size-sm">Only upload CSV files, and not more than 500 kb </span>
                <p className="text-danger font-size-xs" 
                dangerouslySetInnerHTML={{ __html: this.state.errors }}
                ></p>
            </div>
          {/* <ReadCSVFile migrateData={setTableData} /> */}
          <div className="uploader-background">
        <CSVReader
          onDrop={this.handleOnDrop}
          onError={this.handleOnError}  
          addRemoveButton
          onRemoveFile={this.handleOnRemoveFile}
          
          
        >
          <div className="d-flex no-wrap w-100 px-5">
          <span className="d-block my-5 font-size-sm">Drag And Drop Your File Or <u className="font-weight-600">Click</u> Here </span>
          <span className="icon d-block my-auto ms-auto me-0"><i className="bi bi-cloud-upload-fill"></i></span>
          </div>
        </CSVReader>
      </div>
        </div>
        <div className="action mt-3">
          <div className="d-flex no-wrap">
            <button className="w-50 btn-dark py-2" onClick={this.props.loadTable}>Cancel</button>
            <button className="w-50 btn-primary rounded-0 py-2" onClick={this.uploadData}>Upload</button>
          </div>
        </div>
        </div>
      </div>


      </>
    );
  }
}