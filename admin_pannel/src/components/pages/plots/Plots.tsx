import DataGrid from "../../shared/dataGrid/DataGrid";
import { PlotsDefs } from "../../../constants/plots/plotsDefs";
import "./plots.css";
import { useCallback, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { IProject } from "../../../@types/interface/Projects";

type Props = {};

const PlotsPage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState<IProject[]>([]);

  const fetchPlots = useCallback(async () => {
    try {
      const response = await api.project.getPlots(currentPage);
      if (response) {
        setRowData(response);
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }, [currentPage]);

  useEffect(() => {
    fetchPlots();
  }, [fetchPlots]);

  //page
  return (
    <div>
      <div className="btn"></div>
      <DataGrid colDefs={PlotsDefs} rowData={rowData} key={0}></DataGrid>
    </div>
  );
};

export default PlotsPage;
