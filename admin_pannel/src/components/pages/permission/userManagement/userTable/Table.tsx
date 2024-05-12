/*eslint-disable */
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgCheckbox } from "ag-grid-community";

export const Table = () => {
  const data: any = [
    // {
    //   first_name: "Manisha",
    //   last_name: "Das",
    //   email: "abcd@gmail.com",
    //   phone_number: "7888989",
    //   builder_name: "ABC builders",
    //   last_login_date: "xyz",
    // },

    // {
    //   first_name: "Rahul",
    //   last_name: "Dhar",
    //   email: "abcd@gmail.com",
    //   phone_number: "5667878",
    //   builder_name: "SS builders",
    //   last_login_date: "xyz",
    // },

    // {
    //   first_name: "Titli",
    //   last_name: "Roy",
    //   email: "abcd@gmail.com",
    //   phone_number: "878990",
    //   builder_name: "CC builders",
    //   last_login_date: "xyz",
    // },

    // {
    //   first_name: "Diya",
    //   last_name: "Tripathi",
    //   email: "abcd@gmail.com",
    //   phone_number: "8398984",
    //   builder_name: "xyz builders",
    //   last_login_date: "xyz",
    // },
  ];

  const column: any = [
    { field: "full_name", headerName: "Full Name" },
   
  
    { field: "email", headerName: "Email" },
    { field: "phone_number", headerName: "Phone No." },
    { field: "phone_number", headerName: "Role" },
    // { field: "is_disabled", headerName: "Disabled", cellRenderer: AgCheckbox },
    // {
    //   field: "has_all_state_access",
    //   headerName: "State Access",
    //   cellRenderer: AgCheckbox,
    // },
    // {
    //   field: "has_all_project_access",
    //   headerName: "Project Access",
    //   cellRenderer: AgCheckbox,
    // },
    // {
    //   field: "builder_name",
    //   headerName: "Builder Name",
    // },
    {
      field: "last_login_date",
      headerName: "Last login date",
    },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact rowData={data} columnDefs={column} />
    </div>
  );
};
