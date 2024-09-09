import React, { useState } from "react";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { IAdmin } from "../../../../@types/interface/admin.interface";
import { AdminColDefs } from "./adminColdefs/adminColDefs";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const AdminManagement = () => {
  const navigate = useNavigate();
  const [adminDetails, setAdminDetails] = useState<IAdmin[]>([]);

  const handleRouteToAddAdmin = () => {
    navigate("/permission/add-admin");
  };
  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={handleRouteToAddAdmin}
        >
          Add Admin
        </Button>
      </div>
      <DataGrid rowData={adminDetails} colDefs={AdminColDefs} />
    </div>
  );
};

export default AdminManagement;
