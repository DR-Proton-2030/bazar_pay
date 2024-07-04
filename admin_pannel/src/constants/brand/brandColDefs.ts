import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";


export const BrandColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Brand Name",
    cellRenderer: CategoryCellRenderer,
  },

  { field: "description", headerName: "Details" },
  { field: "createdAt", headerName: "Created On" },
  { field: "updatedAt", headerName: "Last Updated On" },
  { field: "action", headerName: "See Details" }
];
