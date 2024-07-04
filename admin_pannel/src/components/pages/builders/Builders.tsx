import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./builders.css";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import { IWholesaler } from "../../../@types/interface/wholesaler";
import StatusCell from "../../shared/statusCell/StatusCell";

const Builders = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IWholesaler[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const fetchWholesalers = async () => {
    const fileter = {};
    try {
      const response = await api.wholesaler.getWholesaler(fileter, currentPage);
      setRowData(response);
    } catch (error) {
      console.error("Error fetching wholesalers:", error);
    }
  };

  const handleSwitchChange = async (id: string, checked: boolean) => {
    const newStatus = checked ? "APPROVED" : "PENDING";
    const payload = {
      id: id,
      status: newStatus,
    };
    try {
      const response = await api.wholesaler.updateWholesalerStatus(payload);
      fetchWholesalers();
    } catch (error) {
      console.error("Error updating wholesaler status:", error);
    }
  };

  const colDefs = [
    { headerName: "Name", field: "name" },
    { headerName: "Contact Name", field: "contact_name" },
    { headerName: "Contact Phone", field: "contact_phone" },
    { headerName: "Contact Email", field: "contact_email" },
    { headerName: "Trade License Number", field: "trade_licensce_number" },
    { headerName: "NID Number", field: "nid_number" },
    {
      headerName: "Status",
      field: "status",
      cellRenderer: (params: any) => (
        <StatusCell {...params} handleSwitchChange={handleSwitchChange} />
      ),
    },
  ];

  useEffect(() => {
    setDashboardHeader("Wholesalers");
    fetchWholesalers();
  }, []);

  useEffect(() => {
    fetchWholesalers();
  }, [currentPage]);

  return (
    <div className="builders-container">
      <div className="add-btn">
        <Button
          variant="contained"
          className="btn"
          style={{
            backgroundColor: "#1DC51D",
            fontFamily: "Railway, sans-serif",
          }}
          onClick={() => navigate("/add-builders")}
        >
          Add Wholesaler
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default Builders;
