import { ColDef } from "ag-grid-community";
import LayoutImageCellRenderer from "../../components/pages/plots/cutomImageLayout";
import DateCellRenderer from "../../components/shared/cellRenderer/DateCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/admin/plots/seeDetailsCellRenderer/SeeDetailsCellRenderer";

export const PlotsDefs : ColDef[] = [
  {
    field: "project_name",
    headerName: "Project Name",
    suppressSizeToFit: true,
  },
  // {
  //   field: "_id",
  //   headerName: "Project Object ID",
  //   suppressSizeToFit: true,
  // },
  // {
  //   field: "builder_object_id",
  //   headerName: "Builder Object ID",
  //   suppressSizeToFit: true,
  // },
  { field: "state", headerName: "State", suppressSizeToFit: true },
  // {
  //   field: "address_lat",
  //   headerName: "Address Latitude",
  //   suppressSizeToFit: true,
  // },
  // {
  //   field: "address_long",
  //   headerName: "Address Longitude",
  //   suppressSizeToFit: true,
  // },
  {
    field: "formatted_address",
    headerName: "Formatted Address",
    suppressSizeToFit: true,
  },
  // {
  //   field: "layout_model_object_id",
  //   headerName: "Layout Model Object ID",
  //   suppressSizeToFit: true,
  // },
  {
    field: "number_of_plots",
    headerName: "Number of Plots",
    suppressSizeToFit: true,
  },
  {
    field: "price_per_sq",
    headerName: "Price Per Sq",
    suppressSizeToFit: true,
  },
  {
    field: "total_sq_feet",
    headerName: "Total Sq Feet",
    suppressSizeToFit: true,
  },
  { field: "description", headerName: "Description", suppressSizeToFit: true },
  {
    field: "average_rating",
    headerName: "Average Rating",
    suppressSizeToFit: true,
  },
  {
    field: "no_of_ratings",
    headerName: "Number of Ratings",
    suppressSizeToFit: true,
  },
  { field: "is_active", headerName: "Is Active", suppressSizeToFit: true },
  {
    field: "layout_image",
    headerName: "Layout Image",
    suppressSizeToFit: true,
    // cellRenderer: LayoutImageCellRenderer,
    cellRenderer: (params: any) =>
      LayoutImageCellRenderer({ ...params, projectId: params.data._id,plotId:"", mode:"ALL" }),
  },
  { field: "createdAt", headerName: "Uploaded On", cellRenderer: DateCellRenderer },
  { field: "updatedAt", headerName: "Last Edited ", cellRenderer: DateCellRenderer },
  { field: "see_details", headerName: "See Details ", cellRenderer: SeeDetailsCellRenderer },
];
