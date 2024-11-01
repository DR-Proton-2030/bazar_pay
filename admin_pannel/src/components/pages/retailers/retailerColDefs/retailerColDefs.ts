import { ColDef } from "ag-grid-community";
import RetailerLogoCellRenderer from "../RetailerlogoCellRenderer/RetailerLogoCellRenderer";
import ImageCellRenderer from "../imageCellRenderer/ImageCellRenderer";
import TLPcellRenderer from "../tradeCellRenderer/TLPcellRenderer";
import NIDcellRenderer from "../nidCellRenderer/NIDcellRenderer";
import OwnerCellRenderer from "../ownerCellRenderer/OwnerCellRenderer";
import DeleteCellRenderer from "../deleteCellRenderer/DeleteCellRenderer";

export const RetailerColDefs: ColDef[] = [
  {
    field: "retailer_name",
    headerName: "Retailer Name",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    cellRenderer: RetailerLogoCellRenderer,
  },
  {
    field: "contact_name",
    headerName: "Contact Name",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "contact_phone",
    headerName: "Contact Phone",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "contact_email",
    headerName: "Contact Email",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  {
    field: "trade_license_number",
    headerName: "Trade License Number",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
  { field: "nid_number", headerName: "Nid Number" },
  {
    field: "sign_board_photo",
    headerName: "Sign Board Photo",

    cellRenderer: ImageCellRenderer,
  },
  {
    field: "retailer_owner_photo",
    headerName: "Owner Photo",
    cellRenderer: OwnerCellRenderer,
  },
  {
    field: "trade_license_photo",
    headerName: "Trade License Photo",
    cellRenderer: TLPcellRenderer,
  },
  {
    field: "nid_photo",
    headerName: "Nid Photo",
    cellRenderer: NIDcellRenderer,
  },
  {
    field: "delete",
    headerName: "Delete",
    cellRenderer: DeleteCellRenderer,
  },
];
