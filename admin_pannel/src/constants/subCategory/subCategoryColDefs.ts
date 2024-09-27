import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";

import CategoryDetailsCellRenderer from "../categories/seeDetails/CategorySeeDetailsRenderer";
import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import SubcategoryCellRenderer from "../../components/pages/categoryDetails/subCategoryDetails/subcategoryCellRenderer/SubcategoryCellRenderer";
import SeeDetails from "../../components/pages/categoryDetails/subCategoryDetails/seeDetails/SeeDetails";
import SeeProducts from "../../components/pages/categoryDetails/subCategoryDetails/seeProducts/SeeProducts";

import SubcategoryDeleteCellRenderer from "./deleteCellRenderer/SubcategoryDeleteCellRenderer";

export const SubcategoryColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Sub category Name",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
    cellRenderer: SubcategoryCellRenderer,
  },

  {
    field: "description",
    headerName: "Details",
    suppressSizeToFit: true,
    filter: "agTextColumnFilter",
    floatingFilter: true,
  },
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
  { field: "action", headerName: "Action", cellRenderer: SeeDetails },
  { field: "action", headerName: "Action", cellRenderer: SeeProducts },
  {
    field: "action",
    headerName: "Action",
    cellRenderer: SubcategoryDeleteCellRenderer,
  },
];
