import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useMemo, useRef } from "react";

interface DataGridProps {
  rowData: any[];
  colDefs: any[];
  onFilterChange: (filterModel: FilterModel) => void;
}

type FilterModel = {
  [key: string]: {
    filterType: string;
    type?: string;
    filter?: string | number;
  };
};

const DataGrid = ({ rowData, colDefs, onFilterChange }: DataGridProps) => {
  const gridApi = useRef<any>(null);
  const defaultColDef = useMemo(
    () => ({
      filterParams: {
        debounceMs: 500,
      },
    }),
    []
  );
  const onFilterChanged = useCallback(() => {
    if (gridApi.current) {
      const filterModel = gridApi.current.getFilterModel();
      onFilterChange(filterModel);
    }
  }, [onFilterChange]);
  return (
    <div className="ag-theme-alpine" style={{ height: 300 }}>
      <AgGridReact
        onGridReady={(params) => {
          gridApi.current = params.api;
        }}
        animateRows={true}
        rowSelection="multiple"
        rowData={rowData}
        columnDefs={colDefs}
        defaultColDef={defaultColDef}
        onFilterChanged={onFilterChanged}
      />
    </div>
  );
};

export default DataGrid;
