import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";

import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import ProductCellRenderer from "../../components/pages/categoryDetails/products/productCellRenderer/ProductCellRenderer";

export const ProductColDefs: ColDef[] = [
  {
    field: "product_name",
    headerName: "Product's Name",
    cellRenderer: ProductCellRenderer,
  },

  { field: "product_description", headerName: "Product Details" },
  { field: "product_status", headerName: "Product Status" },
  { field: "unit", headerName: "Unit" },
  { field: "profit_percentage", headerName: "Profit(%)" },
  {
    field: "createdAt",
    headerName: "Created On",
    cellRenderer: FormattedDateCellRenderer,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated On",
    cellRenderer: FormattedDateCellRenderer,
  },
];
