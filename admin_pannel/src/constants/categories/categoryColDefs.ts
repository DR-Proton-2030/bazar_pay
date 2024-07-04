import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";

export const CategoryColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Category Name",
    cellRenderer: CategoryCellRenderer,
  },

  { field: "description", headerName: "Details" },
  { field: "createdAt", headerName: "Created On" },
  { field: "updatedAt", headerName: "Last Updated On" },
];
