import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";

import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import ProductCellRenderer from "../../components/pages/categoryDetails/products/productCellRenderer/ProductCellRenderer";
import DeleteCellRenderer from "../../components/pages/products/productDefs/deleteCellRenderer/DeleteCellRenderer";

export const ProductColDefs: ColDef[] = [
  {
    field: "product_name",
    headerName: "Product's Name",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    cellRenderer: ProductCellRenderer,
  },

  {
    field: "product_description",
    headerName: "Product Details",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "product_status",
    headerName: "Product Status",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "unit",
    headerName: "Unit",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "profit_percentage",
    headerName: "Profit(%)",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "createdAt",
    headerName: "Created On",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    cellRenderer: FormattedDateCellRenderer,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated On",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    cellRenderer: FormattedDateCellRenderer,
  },
  
];
