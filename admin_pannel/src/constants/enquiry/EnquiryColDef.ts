import { CheckboxCellEditor, ColDef } from "ag-grid-community";
import LayoutImageCellRenderer from "../../components/pages/plots/cutomImageLayout";
import DataCellRenderer from "../../components/shared/cellRenderer/DataCellRenderer";
import DateCellRenderer from "../../components/shared/cellRenderer/DateCellRenderer";
import NameCellRenderer from "../../components/pages/admin/enquiry/nameCellRenderer/NameCellRenderer";
import CheckboxCellRenderer from "../../components/shared/cellRenderer/CheckboxCellRenderer";
import ForwardCellRenderer from "./forwardCellRenderer/ForwardCellRenderer";

export const enquiryColumnDef: ColDef[] = [
  { field: "customer.full_name", headerName: "Customer's Name", cellRenderer: NameCellRenderer },
  { field: "customer.email", headerName: "email", cellRenderer:DateCellRenderer},
  { field: "createdAt", headerName: "Enquiry Date", cellRenderer:DateCellRenderer},
  { field: "customer.phone", headerName: "Mobile", cellRenderer: DataCellRenderer},
  { field: "project.project_name", headerName: "Project Name", cellRenderer:DataCellRenderer },
  { field: "builder.builder_name", headerName: "Builder's Name",cellRenderer: DataCellRenderer },
  { field: "builder.builder_name", headerName: "Forwarded to Project Manager", cellRenderer: ForwardCellRenderer    },
  { field: "builder.builder_name", headerName: "Already Contact",cellRenderer: CheckboxCellRenderer },
  {
    field: "layout_image",
    headerName: "Enquired Plot",
    suppressSizeToFit: true,
    // cellRenderer: LayoutImageCellRenderer,
    cellRenderer: (params: any) =>
      LayoutImageCellRenderer({ ...params, projectId: params.data.project._id, plotId: params.data.plot._id, mode:"ENQUIRY" }),
  },
  ];