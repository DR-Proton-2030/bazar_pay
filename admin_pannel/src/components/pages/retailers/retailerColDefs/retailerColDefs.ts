import { ColDef } from "ag-grid-community";
import RetailerLogoCellRenderer from "../RetailerlogoCellRenderer/RetailerLogoCellRenderer";
import SignboardCellRenderer from "../signboardCell/SignboardCellRenderer";
import ImageCellRenderer from "../imageCellRenderer/ImageCellRenderer";
import TLPcellRenderer from "../tradeCellRenderer/TLPcellRenderer";
import NIDcellRenderer from "../nidCellRenderer/NIDcellRenderer";
import OwnerCellRenderer from "../ownerCellRenderer/OwnerCellRenderer";
import DeleteCellRenderer from "../deleteCellRenderer/DeleteCellRenderer";

export const RetailerColDefs : ColDef[] = [
    { field: "retailer_name" , headerName: "Retailer Name", cellRenderer: RetailerLogoCellRenderer},
    { field: "contact_name" , headerName: "Contact Name"},
    { field: "contact_phone" , headerName: "Contact Phone"},
    { field: "contact_email" , headerName: "Contact Email"},
    { field: "trade_license_number" , headerName: "Trade License Number"},
    { field: "nid_number" , headerName: "Nid Number"},
    { field: "sign_board_photo" , headerName: "Sign Board Photo", cellRenderer: ImageCellRenderer },
    { field: "retailer_owner_photo" , headerName: "Owner Photo", cellRenderer: OwnerCellRenderer},
    { field: "trade_license_photo" , headerName: "Trade License Photo", cellRenderer: TLPcellRenderer},
    { field: "nid_photo" , headerName: "Nid Photo", cellRenderer: NIDcellRenderer},
    
]