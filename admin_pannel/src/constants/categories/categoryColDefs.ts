import { ColDef } from "ag-grid-community";
import NameCellRenderer from "../../components/pages/allCustomers/nameCellRenderer/NameCellRenderer";
import CategoryCellRenderer from "../../components/pages/categories/categoryCellRenderer/CategoryCellRenderer";
import SeeDetailsCellRenderer from "../../components/pages/products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import CategoryDetailsCellRenderer from "./seeDetails/CategorySeeDetailsRenderer";
import FormattedDateCellRenderer from "../../components/shared/dateCellRenderer/FormattedDateCellRenderer";
import SubcategoryCellRenderer from "../../components/pages/categoryDetails/subCategoryDetails/subcategoryCellRenderer/SubcategoryCellRenderer";
import ProductCellRenderer from "./productdetailsCellRenderer/ProductDetailsCellRenderer";
import SubcategoryDetailsCellRenderer from "./subcategoryDetailsCellRenderer/SubcategoryDetailsCellRenderer";
import ProductDetailsCellRenderer from "./productdetailsCellRenderer/ProductDetailsCellRenderer";

export const CategoryColDefs: ColDef[] = [
  {
    field: "name",
    headerName: "Category Name",
    cellRenderer: CategoryCellRenderer,
  },

  { field: "description", headerName: "Details" },
  { field: "createdAt", headerName: "Created On" , cellRenderer: FormattedDateCellRenderer},
  { field: "updatedAt", headerName: "Last Updated On" , cellRenderer: FormattedDateCellRenderer},
  { field: "action", headerName: "See Details" , cellRenderer: CategoryDetailsCellRenderer},
  { field: "action", headerName: "See Subcategories" , cellRenderer: SubcategoryDetailsCellRenderer},
  { field: "action", headerName: "See Products" , cellRenderer: ProductDetailsCellRenderer},
];
