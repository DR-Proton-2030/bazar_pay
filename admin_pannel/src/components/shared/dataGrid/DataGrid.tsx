import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DataGridProp } from "../../../@types/props/DataGrid.props";

interface IRow {
  make: string;
  model: string;
  price: number;
}

const DataGrid = ({ rowData, colDefs } :DataGridProp) => {
  return (
    <div className="ag-theme-alpine" style={{ height: 500}}>
      <AgGridReact
        animateRows={true}
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={colDefs}
      />
    </div>
  );
};

export default DataGrid;
