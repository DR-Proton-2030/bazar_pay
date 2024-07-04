import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

interface DataGridProps {
  rowData: any[];
  colDefs: any[];
}

const DataGrid = ({ rowData, colDefs }: DataGridProps) => {
  return (
    <div className="ag-theme-alpine" style={{ height: 300 }}>
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
