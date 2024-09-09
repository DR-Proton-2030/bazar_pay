import { ColDef } from "ag-grid-community";
import ApproveCellRenderer from "../approveCellRenderer/ApproveCellRenderer";
import BrandSeeDetails from "../../brand/brandSeeDetails/BrandSeeDetails";
import ProductSeeDetails from "../../categoryDetails/products/productSeeDetails/ProductSeeDetails";

export const ProductDefs : ColDef[] = [
  {
    field: "product_name",
    headerName: "Product Name",
    suppressSizeToFit: true,
  },
  {
    field: "product_description",
    headerName: "Description",
    suppressSizeToFit: true,
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
  },
  {
    field: "profit_percentage",
    headerName: "Profit Percentage",
    suppressSizeToFit: true,
  },
  {
    field: "See Details",
    headerName: "Actions",
    cellRenderer: ProductSeeDetails,
  },
];
