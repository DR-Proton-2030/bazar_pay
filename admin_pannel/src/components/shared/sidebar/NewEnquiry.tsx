import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import React from "react";

const data: any = [
  {
    builder_name: "Manisha",
    project_name: "Das",
    layout_image: "image",
    customer_name: "7888989",
    email: "abcd@gmail.com",
  },
  {
    builder_name: "Manisha",
    project_name: "Das",
    layout_image: "image",
    customer_name: "7888989",
    email: "abcd@gmail.com",
  },
  {
    builder_name: "Manisha",
    project_name: "Das",
    layout_image: "image",
    customer_name: "7888989",
    email: "abcd@gmail.com",
  },
  {
    builder_name: "Manisha",
    project_name: "Das",
    layout_image: "image",
    customer_name: "7888989",
    email: "abcd@gmail.com",
  },
];

const columns: any = [
  { field: "builder_name", headerName: "Builder's Name" },
  { field: "project_name", headerName: "Project Name" },
  { field: "layout_image", headerName: "Image Layout" },
  { field: "customer_name", headerName: "Customer's Name" },
  { field: "email", headerName: "email" },
];

const NewEnquiry = () => {
  return (
    //admin enquiry ag-grid starts here
    <div className="ag-theme-alpine" style={{ height: 500, width: "full" }}>
      <AgGridReact rowData={data} columnDefs={columns} />
    </div>
  );
};

export default NewEnquiry;
