import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import DataGrid from "../../shared/dataGrid/DataGrid";
import UIContext from "../../../contexts/uiContext/UIContext";
import { IWholesaler } from "../../../@types/interface/wholesaler";
import StatusCell from "../../shared/statusCell/StatusCell";
import LogoCellRenderer from "./logoCellRenderer/LogoCellRenderer";
import FormattedDateCellRenderer from "../../shared/dateCellRenderer/FormattedDateCellRenderer";
import WholesalerDetailsCellRenderer from "../products/seeDetailsCellRenderer/SeeDetailsCellRenderer";
import TLPcellRenderer from "./tradeCellRenderer/TLPcellRenderer";
import NIDcellRenderer from "./nidCellRenderer/NIDcellRenderer";
import OwnerCellRenderer from "./ownerCellRenderer/OwnerCellRenderer";
import ImageCellRenderer from "./imageCellRenderer/ImageCellRenderer";

const Wholesalers = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IWholesaler[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleRouteToAddWholesaler = () => {
    navigate("/add-wholesalers");
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };

  const fetchWholesalers = useCallback(async () => {
    const filter = {};
    try {
      const response = await api.wholesaler.getWholesaler(filter, currentPage);
      setRowData(response);
    } catch (error) {
      console.error("Error fetching wholesalers:", error);
    }
  }, [currentPage]);

  const handleSwitchChange = async (id: string, checked: boolean) => {
    const newStatus = checked ? "ACTIVE" : "REJECTED";
    const payload = {
      id: id,
      approval_status: newStatus,
    };
    try {
      const response = await api.wholesaler.updateWholesalerStatus(payload);
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
    setDashboardHeader("Wholesalers List");
  }, [setDashboardHeader]);

  useEffect(() => {
    fetchWholesalers();
  }, [fetchWholesalers]);

  return (
    <div className="builders-container">
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={handleRouteToAddWholesaler}
        >
          Add Wholesaler
        </Button>
      </div>
      <DataGrid rowData={rowData} colDefs={colDefs} />
    </div>
  );
};

export default Wholesalers;
