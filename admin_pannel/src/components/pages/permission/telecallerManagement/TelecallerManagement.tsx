import { PermissionColDefs } from "../../../../constants/permission/permissionColDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";

const TelecallerManagement = () => {
  return (
    <div>
      <DataGrid colDefs={PermissionColDefs} rowData={[]} key={0} />
    </div>
  );
};

export default TelecallerManagement;
