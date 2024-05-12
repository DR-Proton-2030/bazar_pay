import { useContext, useEffect } from "react";
import { PermissionColDefs } from "../../../../constants/permission/permissionColDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";
import UIContext from "../../../../contexts/uiContext/UIContext";

const TelecallerManagement = () => {
  const { setDashboardHeader} = useContext(UIContext)

  useEffect(() => {
    setDashboardHeader("Telecaller Management")
  }, [setDashboardHeader])
  return (
    <div>
      <DataGrid colDefs={PermissionColDefs} rowData={[]} key={0} />
    </div>
  );
};

export default TelecallerManagement;
