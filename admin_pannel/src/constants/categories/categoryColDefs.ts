import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import CategoryDetailsCellRenderer from "./seeDetails/CategorySeeDetailsRenderer";
import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";

export const CategoryColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Category Name",
    cellRenderer: CategoryCellRenderer,
  },

  { field: "description", headerName: "Details" },
  { field: "createdAt", headerName: "Created On" , cellRenderer: FormattedDateCellRenderer},
  { field: "updatedAt", headerName: "Last Updated On" , cellRenderer: FormattedDateCellRenderer},
  { field: "action", headerName: "See Details" , cellRenderer: CategoryDetailsCellRenderer}
];
