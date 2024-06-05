import { ColDef } from "ag-grid-community";
import ApproveCellRenderer from "../approveCellRenderer/ApproveCellRenderer";

export const ProductDefs : ColDef[] = [
  {
    field: "product_name",
    headerName: "Product Name",
    suppressSizeToFit: true,
  },
  { field: "wholesaler.wholesaler_name", headerName: "WholeSaler Name", suppressSizeToFit: true },
  { field: "wholesaler.contact_full_name", headerName: "WholeSaler Contact Name", suppressSizeToFit: true },
  { field: "wholesaler.contact_phone_number", headerName: "WholeSaler Contact Phone", suppressSizeToFit: true },
  {
    field: "product_description",
    headerName: "Description",
    suppressSizeToFit: true,
  },
  {
    field: "current_stock",
    headerName: "Stock",
    suppressSizeToFit: true,
  },
  {
    field: "action",
    headerName: "Approve",
    cellRenderer: ApproveCellRenderer,
    suppressSizeToFit: true,
  },
  {
    field: "product_buying_price",
    headerName: "Product Buying Price",
    suppressSizeToFit: true,
  },
  {
    field: "product_saling_price",
    headerName: "Product Selling Price",
    suppressSizeToFit: true,
  },
];
