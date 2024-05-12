import { useNavigate } from "react-router-dom";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { Button } from "@mui/material";

export const BuilderCellRenderer = ({ data }: { data: IBuilder }) => {
  const navigate = useNavigate();
  const handleAdminRoute = () => {
    navigate(`/admin?cid=${data._id}`);
  };
  return (
    <Button className="green-outlined-button"variant="outlined" onClick={handleAdminRoute}>
      See Details
    </Button>
  );
};
