import { Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import { ICategory } from "../../../@types/interface/category.interface";
import { ISubcategory } from "../../../@types/interface/subcategory.interface";

const ProductDetailsCellRenderer = ({ data }: { data: ICategory }) => {
  const navigate = useNavigate();
  const handleRouteToSubcategoryDetails = () => {
    navigate(`/product-list?cid=${data._id}`);
  };
  return (
    <Button
      variant="outlined"
      className="blue-outlined-button"
      onClick={handleRouteToSubcategoryDetails}
    >
      See Products
    </Button>
  );
};

export default ProductDetailsCellRenderer;
