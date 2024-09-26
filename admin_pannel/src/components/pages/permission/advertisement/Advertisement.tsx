import { Button } from "@mui/material";
import { AdColDefs } from "../../../../constants/advertisement/adColDefs";
import { useNavigate } from 'react-router-dom'
import DataGrid from "../../../shared/dataGrid/DataGrid";
import { useEffect , useContext } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";


const Advertisement = () => {
  const navigate = useNavigate()
  const { setDashboardHeader } = useContext(UIContext);
  useEffect(() => {
    setDashboardHeader("Advertisements");
  }, [setDashboardHeader]);
  return (
    <div>
      <div className="add-btn">
        <Button
          variant="contained"
          className="blue-btn"
          
          onClick={() => navigate("/add-banner")}
        >
          Add Banner
        </Button>
      </div>
      <DataGrid colDefs={AdColDefs} rowData={[]} key={0} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number; }; }): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default Advertisement;


