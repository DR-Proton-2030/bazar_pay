import React, { useCallback, useContext, useEffect, useState } from 'react'
import UIContext from '../../../../contexts/uiContext/UIContext';
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { api } from '../../../../utils/api';
import AuthContext from '../../../../contexts/authContext/authContext';
import BuilderContext from '../../../../contexts/builderContext/BuilderContext';
import { ColDef } from 'ag-grid-community';
import DataCellRenderer from '../../../shared/cellRenderer/DataCellRenderer';
import NameCellRenderer from './nameCellRenderer/NameCellRenderer';
import ActionCellRenderer from '../../../shared/cellRenderer/ActionCellRenderer';
import LayoutImageCell from '../../plots/cutomImageLayout';
import BookCellRenderer from './bookCellRenderer/BookCellRenderer';

const ForwardedEnquiry = () => {
  const { setDashboardHeader } = useContext(UIContext);
  const {user} = useContext(AuthContext);
  const {builderDetails} = useContext(BuilderContext);

  const [enquryList,setEnquryList] = useState<any[]>([]);

  const getEnquiryList = useCallback( async() =>{
    const filter ={
      builder_object_id: builderDetails?._id,
      forwarded_to: user?._id
    }
    const response = await api.booking.getForwardEnquryList(filter);
    if(response){
      setEnquryList(response.result);
    }
  },[builderDetails, user])

  const enquirycolumn: ColDef[] = [
    { field: "customer.full_name", headerName: "Customer Name", cellRenderer : NameCellRenderer },
    { field: "customer.phone", headerName: "Phone Number", cellRenderer: DataCellRenderer },
    { field: "customer.email", headerName: "Customer Email", cellRenderer: DataCellRenderer },
    { field: "customer.gender", headerName: "Customer Gender" , cellRenderer: DataCellRenderer},
    { field: "customer.address", headerName: "Customer Address" , cellRenderer: DataCellRenderer},
    { field: "project.project_name", headerName: "Project Name" , cellRenderer: DataCellRenderer},
    { field: "project.state", headerName: "State" , cellRenderer: DataCellRenderer},
    {field: "plot.is_booked", headerName:"Booked", cellRenderer :BookCellRenderer},
    { field: "project.layout_image", headerName: "Layout Image" , suppressSizeToFit: true,cellRenderer: (params: any) =>
      LayoutImageCell({ ...params, projectId: params.data.project._id, plotId:params.data.plot_object_id , mode:"ENQUIRY" })},
    { field: "action", headerName: "Action" , cellRenderer: ActionCellRenderer},
  ];

  useEffect(() => {
    setDashboardHeader("Forwarded Enquiry");
  },[setDashboardHeader]);

  useEffect(()=>{
    getEnquiryList();
  },[getEnquiryList])

  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
    <AgGridReact rowData={enquryList} columnDefs={enquirycolumn} />
  </div>
  )
}

export default ForwardedEnquiry