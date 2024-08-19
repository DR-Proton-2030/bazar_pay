import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { IBrand } from "../../../../@types/interface/brand.interface";

const BrandSeeDetails = ({ data }: { data: IBrand }) => {
  const navigate = useNavigate();
  const handleRouteToProductDetails = () => {
    navigate(`/product-list?bid=${data._id}`);
  };
  return (
    <Button
      variant="outlined"
      className="blue-outlined-button"
      onClick={handleRouteToProductDetails}
    >
      See Details
    </Button>
  );
};

export default BrandSeeDetails;
