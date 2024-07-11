import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import BrandDetailsCellRenderer from "./seeDetails/BrandDetailsCellRenderer";
import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import BrandSeeDetails from "../../components/pages/brand/brandSeeDetails/BrandSeeDetails";

export const BrandColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Brand Name",
    cellRenderer: BrandDetailsCellRenderer,
  },
  { field: "country", headerName: "Country" },
  { field: "description", headerName: "Details" },
  {
    field: "createdAt",
    headerName: "Created On",
    cellRenderer: FormattedDateCellRenderer,
  },
  {
    field: "updatedAt",
    headerName: "Last Updated On",
    cellRenderer: FormattedDateCellRenderer,
  },
  {
    field: "action",
    headerName: "See Details",
    cellRenderer: BrandSeeDetails,
  },
];
