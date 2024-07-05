import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";

export const SubcategoryColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Sub category Name",
  },
  {
    field: "sub_category_image",
    headerName: "Image",
  },

  { field: "description", headerName: "Details" },
  { field: "createdAt", headerName: "Created On" },
  { field: "updatedAt", headerName: "Last Updated On" },
];
