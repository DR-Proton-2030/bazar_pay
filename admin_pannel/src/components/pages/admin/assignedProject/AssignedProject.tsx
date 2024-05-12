import React, { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import { IassignedProject } from "../../../../@types/interface/assignedProjectList";
import { api } from "../../../../utils/api";
import AuthContext from "../../../../contexts/authContext/authContext";

import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { ColDef } from "ag-grid-community";
import DateCellRenderer from "../../../shared/cellRenderer/DateCellRenderer";
import DataCellRenderer from "../../../shared/cellRenderer/DataCellRenderer";
import LayoutImageCell from "../../plots/cutomImageLayout";

const AssignedProject = () => {
  const {user} = useContext(AuthContext);
  const { setDashboardHeader } = useContext(UIContext);
  const [assignedProjectList , setAssignedProjectList] = useState<IassignedProject[]>([]);

  const projectcolumn: ColDef[] = [
    { field: "project.project_name", headerName: "Project Name", cellRenderer: DataCellRenderer },
    {
      field: "project.layout_image",
      headerName: "Layout Image",
      suppressSizeToFit: true,
      // cellRenderer: LayoutImageCellRenderer,
      cellRenderer: (params: any) =>
        LayoutImageCell({ ...params, projectId: params.data.project._id,plotId:"", mode:"ALL" }),
    },
    { field: "project.state", headerName: "State",cellRenderer: DataCellRenderer },
    { field: "project.formatted_address", headerName: "Address",cellRenderer: DataCellRenderer },
    { field: "project.number_of_plots", headerName: "Total Plots",cellRenderer: DataCellRenderer },
    { field: "project.price_per_sq", headerName: "Price/sq.Ft", cellRenderer: DataCellRenderer },
    { field: "project.average_rating", headerName: "Average Ratings",cellRenderer: DataCellRenderer },
    { field: "project.no_of_ratings", headerName: "No of Rating",cellRenderer: DataCellRenderer },
    { field: "project.createdAt", headerName: "Uploaded On",cellRenderer: DateCellRenderer },
   
  ];

  const getAssignedProjectList = useCallback (async()=>{
    const filter = {
      page: 1,
      sortField: "updatedAt",
      admin_object_id: user?._id
    }
    const response = await api.project.getAssignedProjectList(filter);
    setAssignedProjectList(response.result);
  },[user]);

  useEffect(() => {
    setDashboardHeader("Assigned Project");
  },[setDashboardHeader]);

  useEffect(()=>{
    getAssignedProjectList();
  },[getAssignedProjectList]);

  console.log(assignedProjectList);
  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
    <AgGridReact rowData={assignedProjectList} columnDefs={projectcolumn} />
  </div>
  );
};

export default AssignedProject;
