import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "./builders.css";
import { useContext, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import { IWholesaler } from "../../../@types/interface/wholesaler";
import StatusCell from "../../shared/statusCell/StatusCell";
import LogoCellRenderer from "./logoCellRenderer/LogoCellRenderer";
import SignboardCellRenderer from "./signboardCell/SignboardCellRenderer";
import FormattedDateCellRenderer from "../../shared/dateCellRenderer/FormattedDateCellRenderer";
import SeeDetailsCellRenderer from "../products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import WholesalerDetailsCellRenderer from "../products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import TLPcellRenderer from "./tradeCellRenderer/TLPcellRenderer";
import NIDcellRenderer from "./nidCellRenderer/NIDcellRenderer";
import OwnerCellRenderer from "./ownerCellRenderer/OwnerCellRenderer";
import ImageCellRenderer from "./imageCellRenderer/ImageCellRenderer";

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
    {
      headerName: "Wholesaler Name",
      field: "wholesaler_name",
      cellRenderer: LogoCellRenderer,
    },
    {
      headerName: "Owner Name",
      field: "owner_name",
      cellRenderer: OwnerCellRenderer,
    },
    { headerName: "Owner Phone", field: "owner_phone" },
    { headerName: "Owner Email", field: "owner_email" },
    {
      headerName: "Status",
      field: "approval_status",
      cellRenderer: (params: any) => (
        <StatusCell {...params} handleSwitchChange={handleSwitchChange} />
      ),
    },
    { headerName: "Trade License Number", field: "trade_licensce_number" },
    { headerName: "NID Number", field: "nid_number" },

    {
      headerName: "Sign Board Photo",
      field: "sign_board_photo",
      cellRenderer: ImageCellRenderer,
    },
    {
      headerName: "Trade License Photo",
      field: "trade_license_photo",
      cellRenderer: TLPcellRenderer,
    },
    {
      headerName: "NID Photo",
      field: "nid_photo",
      cellRenderer: NIDcellRenderer,
    },

    {
      headerName: "Created On",
      field: "createdAt",
      cellRenderer: FormattedDateCellRenderer,
    },
    {
      headerName: "Last Edited On",
      field: "updatedAt",
      cellRenderer: FormattedDateCellRenderer,
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: WholesalerDetailsCellRenderer,
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
          className="blue-btn"
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
