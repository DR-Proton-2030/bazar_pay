import { ColDef } from "ag-grid-community";
import { BuilderCellRenderer } from "../../components/pages/builders/builderCellRenderer/BuilderCellRenderer";
import BuilderNameCellRenderer from "../../components/pages/builders/nameCellRenderer/NameCellRenderer";

export const BuildersColDefs: ColDef[] = [
  //   {
  //     field: "builder_name",
  //     headerName: "Builder's Name",
  //     suppressSizeToFit: true,
  //   },
  {
    field: "full_name",
    headerName: "Name",
    cellRenderer: BuilderNameCellRenderer,
    suppressSizeToFit: true,
  },
  {
    field: "address",
    headerName: "Address",
    
    suppressSizeToFit: true,
  },
  // {
  //   field: "builder_number",
  //   headerName: "Builder Number",
  //   suppressSizeToFit: true,
  // },
  // { field: "cin_number", headerName: "CIN Number", suppressSizeToFit: true },
  // {
  //   field: "number_projects",
  //   headerName: "Number of Projects",
  //   suppressSizeToFit: true,
  // },
  // {
  //   field: "contact_first_name",
  //   headerName: "Contact First Name",
  //   suppressSizeToFit: true,
  // },
  // {
  //   field: "contact_last_name",
  //   headerName: "Contact Last Name",
  //   suppressSizeToFit: true,
  // },
  {
    field: "phone_number",
    headerName: "Phone No.",
    suppressSizeToFit: true,
  },
  { field: "email", headerName: "Email", suppressSizeToFit: true },
  // { field: "GST_number", headerName: "GST No.", suppressSizeToFit: true },
  // { field: "PAN", headerName: "PAN No.", suppressSizeToFit: true },
  // {
  //   field: "average_ratings",
  //   headerName: "Average Ratings",
  //   suppressSizeToFit: true,
  // },
  // { field: "no_ratings", headerName: "No Ratings", suppressSizeToFit: true },
  {
    field: "action",
    headerName: "Action",
    cellRenderer: BuilderCellRenderer,
    suppressSizeToFit: true,
  },
];
