import React, { useState, useEffect } from "react";
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { DataGridProp } from "../../../@types/props/DataGrid.props";
import { Pagination } from "@mui/material";
import { api } from "../../../utils/api";
import { ICustomer } from "../../../@types/interface/Customer.interface";

const CustomerDataGrid = ({ colDefs }: DataGridProp) => {
  const [rowData, setRowData] = useState<ICustomer[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const fetchCustomers = async (filterQuery: any, page: number) => {
    try {
      const response = await api.customer.getCustomer(filterQuery, page);
      if (response) {
        const formattedData = response.map((customer: ICustomer) => ({
          ...customer,
          phone: customer.phone ?? "N/A",
          gender: customer.gender ?? "N/A",
          state: customer.state ?? "N/A",
          address: customer.address ?? "N/A",
          referal_code: customer.referal_code ?? "N/A",
          refered_by_code: customer.refered_by_code ?? "N/A",
        }));
        setRowData(formattedData);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetchCustomers({}, currentPage);
  }, [currentPage]);

  return (
    <div>
      <div className="ag-theme-alpine" style={{ height: 500 }}>
        <AgGridReact
          animateRows={true}
          rowSelection="multiple"
          rowData={rowData}
          columnDefs={colDefs}
        />
      </div>
      {/* Implement pagination component here and handle page changes */}
      <div style={{ display: "flex", justifyContent: "end", marginTop: "5px" }}>
        <Pagination count={10} color="primary" onChange={handlePageChange} />
      </div>
    </div>
  );
};

export default CustomerDataGrid;
