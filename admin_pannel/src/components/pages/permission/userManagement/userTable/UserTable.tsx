/*eslint-disable */
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { AgCheckbox } from "ag-grid-community";

export const UserTable = () => {
  const data: any = [
    {
      first_name: "Manisha",
      last_name: "Das",
      role: "admin",
      email: "abcd@gmail.com",
      phone_number: "7888989",
      login_date: "xyz",
    },
    {
      first_name: "Rahul",
      last_name: "Dhar",
      role: "admin",
      email: "abcd@gmail.com",
      phone_number: "5667878",
      login_date: "xyz",
    },
    {
      first_name: "Titli",
      last_name: "Roy",
      role: "admin",
      email: "abcd@gmail.com",
      phone_number: "878990",
      login_date: "xyz",
    },
    {
      first_name: "Diya",
      last_name: "Tripathi",
      role: "admin",
      email: "abcd@gmail.com",
      phone_number: "8398984",
      login_date: "xyz",
    },

    {
      first_name: "Diya",
      last_name: "Tripathi",
      role: "admin",
      email: "abcd@gmail.com",
      phone_number: "8398984",
      login_date: "xyz",
    },
  ];

  const column: any = [
    { field: "first_name", headerName: "First Name", pinned: "left" },
    { field: "last_name", headerName: "Last Name", pinned: "left" },
    { field: "role", headerName: "Role" },
    { field: "email", headerName: "Email" },
    { field: "phone_number", headerName: "Phone No." },
    { field: "login_date", headerName: "Last Login Date" },
    {
      field: "company_access",
      headerName: "Company Access",
      cellRenderer: AgCheckbox,
      editable: true,
    },
    {
      field: "State_access",
      headerName: "State Access",
      cellRenderer: AgCheckbox,
      editable: true,
    },
    {
      field: "project_access",
      headerName: "Project Access",
      cellRenderer: AgCheckbox,
      editable: true,
    },
    {
      field: "permission_access",
      headerName: "Permission Management Access",
      cellRenderer: AgCheckbox,
      editable: true,
    },
    {
      field: "Payment_access",
      headerName: "Payment Access",
      cellRenderer: AgCheckbox,
      editable: true,
    },
  ];
  return (
    <div className="ag-theme-alpine" style={{ height: 500 }}>
      <AgGridReact rowData={data} columnDefs={column} />
    </div>
  );
};
