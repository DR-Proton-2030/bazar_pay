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
import DeleteCellRenderer from "./deleteCellRenderer/DeleteCellRenderer";
import { FilterModel } from "ag-grid-community";
import { formatFilters } from "../../../utils/commonFunction/formatApiFilters";
import { IPagination } from "../../../@types/props/pagination";
import BasicPagination from "../../shared/basicPagination/BasicPagination";

const Wholesalers = () => {
  const navigate = useNavigate();
  const { setDashboardHeader } = useContext(UIContext);
  const [rowData, setRowData] = useState<IWholesaler[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState([]);
  const [wholesalerPagination, setWholesalerPagination] = useState<IPagination>(
    {
      currentPage: 1,
      pageCount: 1,
    }
  );

  const handleRouteToAddWholesaler = () => {
    navigate("/add-wholesalers");
  };

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setWholesalerPagination((prev) => ({
      ...prev,
      currentPage: value,
    }));
  };

  const handleFilterChange = (filterModel: FilterModel) => {
    setFilters((prevFilters) => {
      const sanitizedFilters = { ...prevFilters };
      Object.keys(sanitizedFilters).forEach((key: any) => {
        if (!filterModel[key]) {
          delete sanitizedFilters[key];
        }
      });
      const updatedFilters = { ...sanitizedFilters, ...filterModel };
      console.log("Updated Filters-->", updatedFilters);
      return updatedFilters;
    });
  };

  const fetchWholesalers = useCallback(async () => {
    try {
      const formattedFilter = formatFilters(filters);
      console.log("Formatted filters-->", formattedFilter);
      setLoading(true);

      const filter = {
        ...formattedFilter,
        page: wholesalerPagination.currentPage,
      };

      const response = await api.wholesaler.getWholesaler(filter);
      if (response) {
        setRowData(response.result);
        setWholesalerPagination(response.pagination);
      }
    } catch (error) {
      console.error("Error fetching wholesalers:", error);
    }
  }, [wholesalerPagination.currentPage, filters]);

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
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: LogoCellRenderer,
    },
    {
      headerName: "Owner Name",
      field: "owner_name",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: OwnerCellRenderer,
    },
    {
      headerName: "Owner Phone",
      field: "owner_phone",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      headerName: "Owner Email",
      field: "owner_email",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      headerName: "Status",
      field: "approval_status",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: (params: any) => (
        <StatusCell {...params} handleSwitchChange={handleSwitchChange} />
      ),
    },
    {
      headerName: "Trade License Number",
      field: "trade_licensce_number",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },
    {
      headerName: "NID Number",
      field: "nid_number",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
    },

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
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: FormattedDateCellRenderer,
    },
    {
      headerName: "Last Edited On",
      field: "updatedAt",
      suppressSizeToFit: true,
      filter: "agTextColumnFilter",
      floatingFilter: true,
      cellRenderer: FormattedDateCellRenderer,
    },
    {
      headerName: "Actions",
      field: "actions",
      cellRenderer: WholesalerDetailsCellRenderer,
    },
    {
      field: "delete",
      headerName: "Delete",
      cellRenderer: DeleteCellRenderer,
    },
  ];

  useEffect(() => {
    setDashboardHeader("Wholesalers List");
  }, [setDashboardHeader]);

  useEffect(() => {
    fetchWholesalers();
  }, [fetchWholesalers]);

  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          onClick={handleRouteToAddWholesaler}
        >
          Add Wholesaler
        </Button>
      </div>
      <DataGrid
        rowData={rowData}
        colDefs={colDefs}
        onFilterChange={handleFilterChange}
      />

      {/* <BasicPagination
        pageCount={wholesalerPagination.pageCount}
        handlePageChange={handlePageChange}
        currentPage={wholesalerPagination.currentPage}
      /> */}
    </div>
  );
};

export default Wholesalers;
