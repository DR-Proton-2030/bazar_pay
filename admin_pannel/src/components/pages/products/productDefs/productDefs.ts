import { ColDef } from "ag-grid-community";
import ApproveCellRenderer from "../approveCellRenderer/ApproveCellRenderer";
import BrandSeeDetails from "../../brand/brandSeeDetails/BrandSeeDetails";
import ProductSeeDetails from "../../categoryDetails/products/productSeeDetails/ProductSeeDetails";
import DeleteCellRenderer from "./deleteCellRenderer/DeleteCellRenderer";

export const ProductDefs : ColDef[] = [
  {
    field: "product_name",
    headerName: "Product Name",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
   
  },
  {
    field: "product_description",
    headerName: "Description",
    suppressSizeToFit: true,
    
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },

  {
    field: "action",
    headerName: "Approve",
    cellRenderer: ApproveCellRenderer,
    suppressSizeToFit: true,
  },
  {
    field: "product_status",
    headerName: "Product Status",
    suppressSizeToFit: true,
    
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "profit_percentage",
    headerName: "Profit Percentage",
    suppressSizeToFit: true,
    
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "See Details",
    headerName: "Actions",
    cellRenderer: ProductSeeDetails,
  },
  {
    field: "actions", 
    headerName: "Action",
    cellRenderer: DeleteCellRenderer
  }
];
