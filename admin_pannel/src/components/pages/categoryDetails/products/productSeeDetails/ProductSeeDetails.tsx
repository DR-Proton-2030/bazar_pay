import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";


const ProductSeeDetails = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  const handleRouteToProductDetails = () => {
    navigate(`/product-detail-admin?pid=${data._id}`);
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

export default ProductSeeDetails;
