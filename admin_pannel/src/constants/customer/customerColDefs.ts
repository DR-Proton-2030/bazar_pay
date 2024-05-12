import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import DataCellRenderer from "../../components/shared/cellRenderer/DataCellRenderer";

export const CustomerColDefs: ColDef[] = [
  {
    field: "full_name",
    headerName: "Full Name",
    cellRenderer: NameCellRenderer,
    suppressSizeToFit: true,
  },
  { field: "email", headerName: "Email", suppressSizeToFit: true, cellRenderer: DataCellRenderer },
  { field: "phone", headerName: "Phone", cellRenderer: DataCellRenderer },
  { field: "gender", headerName: "Gender", cellRenderer: DataCellRenderer },
  { field: "state", headerName: "State", cellRenderer: DataCellRenderer },
  { field: "address", headerName: "Address", cellRenderer: DataCellRenderer },
  // { field: "profile_photo", headerName: "Profile Photo" },
  // { field: "is_disabled", headerName: "Disabled", cellRenderer: DataCellRenderer },
  // { field: "referal_code", headerName: "Referral Code", cellRenderer: DataCellRenderer },
  // { field: "refered_by_code", headerName: "Referred By Code", cellRenderer: DataCellRenderer },
  // { field: "createdAt", headerName: "Created At", cellRenderer: DataCellRenderer },
  // { field: "updatedAt", headerName: "Updated At", cellRenderer: DataCellRenderer },
];
