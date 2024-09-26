import { ColDef } from "ag-grid-community";
import BrandDetailsCellRenderer from "./seeDetails/BrandDetailsCellRenderer";
import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import BrandSeeDetails from "../../components/pages/brand/brandSeeDetails/BrandSeeDetails";
import DeleteCellRenderer from "../../components/pages/brand/deleteCellRenderer/DeleteCellRenderer";

export const BrandColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Brand Name",
    suppressSizeToFit: true,
		filter: "agTextColumnFilter",
		floatingFilter: true,
    cellRenderer: BrandDetailsCellRenderer,
  },
  { field: "country", headerName: "Country",suppressSizeToFit: true,
		filter: "agTextColumnFilter",
		floatingFilter: true },
  { field: "description", headerName: "Details" , suppressSizeToFit: true,
		filter: "agTextColumnFilter",
		floatingFilter: true},
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
  {
    field: "action",
    headerName: "See Details",
    cellRenderer: BrandSeeDetails,
  },
  { field: "actions", headerName: "Action", cellRenderer: DeleteCellRenderer },
];
