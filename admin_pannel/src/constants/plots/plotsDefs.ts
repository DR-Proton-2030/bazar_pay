import { ColDef } from "ag-grid-community";
import LayoutImageCellRenderer from "../../components/pages/plots/cutomImageLayout";
import DateCellRenderer from "../../components/shared/cellRenderer/DateCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/admin/plots/seeDetailsCellRenderer/SeeDetailsCellRenderer";

export const PlotsDefs : ColDef[] = [
  {
    field: "product_title",
    headerName: "Product Title",
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
  { field: "category", headerName: "Products's Category", suppressSizeToFit: true },
  { field: "product_image", headerName: "Product Image", suppressSizeToFit: true },
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
    field: "Description",
    headerName: "Description",
    suppressSizeToFit: true,
  },
  // {
  //   field: "layout_model_object_id",
  //   headerName: "Layout Model Object ID",
  //   suppressSizeToFit: true,
  // },
  {
    field: "Price",
    headerName: "Price",
    suppressSizeToFit: true,
  },
  {
    field: "no_of_ratings",
    headerName: "Product Ratings",
    suppressSizeToFit: true,
  },
  {
    field: "reviews",
    headerName: "Product Reviews",
    suppressSizeToFit: true,
  },
 
  // {
  //   field: "layout_image",
  //   headerName: "Layout Image",
  //   suppressSizeToFit: true,
  //   // cellRenderer: LayoutImageCellRenderer,
  //   cellRenderer: (params: any) =>
  //     LayoutImageCellRenderer({ ...params, projectId: params.data._id,plotId:"", mode:"ALL" }),
  // },
  { field: "createdAt", headerName: "Uploaded On", cellRenderer: DateCellRenderer },
  { field: "updatedAt", headerName: "Last Edited ", cellRenderer: DateCellRenderer },
  { field: "see_details", headerName: "See Details ", cellRenderer: SeeDetailsCellRenderer },
];
