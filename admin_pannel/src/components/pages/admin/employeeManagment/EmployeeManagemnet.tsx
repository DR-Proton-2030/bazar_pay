import React, { useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../../../@types/interface/user.interface";
import BuilderContext from "../../../../contexts/builderContext/BuilderContext";
import { SelectChangeEvent } from "@mui/material";
import { api } from "../../../../utils/api";
import "./employee.css";

const EmployeeManagemnet = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const { builderDetails } = useContext(BuilderContext);
  const [employeeList, setEmployeeList] = useState<IUser[]>([]);

  const getEmployeeList = async () => {
    const filter = {
      page: 1,
      sortField: "updatedAt",
      builder_object_id: builderDetails?._id || "",
    };
    const response = await api.admin.getEmployeeList(filter);
    setEmployeeList(response);
  };

  const column: any = [
    { field: "full_name", headerName: "Name" },
    { field: "email", headerName: "Email" },
    { field: "phone_number", headerName: "Phone No." },
    { field: "role", headerName: "Role" },
    { field: "last_login_date", headerName: "Last login date" },
    { field: "createdAt", headerName: "Created on" },
  ];

  const handleNavigateToAddEmployee = () => {
    navigate(`/admin/add-employee?cid=${builderDetails?._id}`);
  };

  useEffect(() => {
    setDashboardHeader("Employee Management");
  }, [setDashboardHeader]);

  useEffect(() => {
    getEmployeeList();
  }, []);
  return (
    <div>
      <div className="employee-container">
        <button
          className="add-employee-btn"
          style={{ fontSize: "15px" }}
          onClick={handleNavigateToAddEmployee}
        >
          Add employee
        </button>
      </div>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact rowData={employeeList} columnDefs={column} />
      </div>
    </div>
  );
};

// const handleChange = (event: | SelectChangeEvent<string | number | string[]>
//   | React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> ) => {
//     const { target: { value, name}, } = event;
//     setEmployeeList(Object.assign({}, employeeList, { [name]: value }))

// }

export default EmployeeManagemnet;
