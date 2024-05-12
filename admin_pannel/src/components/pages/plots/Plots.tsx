import DataGrid from "../../shared/dataGrid/DataGrid";
import { PlotsDefs } from "../../../constants/plots/plotsDefs";
import "./plots.css";
import { useCallback, useContext, useEffect, useState } from "react";
import { api } from "../../../utils/api";
import { IProject } from "../../../@types/interface/Projects";
import UIContext from "../../../contexts/uiContext/UIContext";

type Props = {};

const PlotsPage = (props: Props) => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState<IProject[]>([]);
  const {setDashboardHeader} = useContext(UIContext);

  // const fetchPlots = useCallback(async () => {
  //   try {
  //     const response = await api.project.getPlots(currentPage);
  //     if (response) {
  //       setRowData(response);
  //     }
  //   } catch (error) {
  //     console.error("Error while fetching data:", error);
  //   }
  // }, [currentPage]);

  // useEffect(() => {
  //   fetchPlots();
  // }, [fetchPlots]);

  useEffect(() => {
    setDashboardHeader("All Products")
  },[setDashboardHeader])
  //page
  return (
    <div>
      <div className="btn"></div>
      <DataGrid colDefs={PlotsDefs} rowData={rowData} key={0}></DataGrid>
    </div>
  );
};

export default PlotsPage;
