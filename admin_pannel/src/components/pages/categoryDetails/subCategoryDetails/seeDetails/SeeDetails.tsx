import { Button } from "@mui/material"

import { useNavigate } from "react-router-dom"
import { ISubcategory } from "../../../../../@types/interface/subcategory.interface";
import { IProduct } from "../../../../../@types/interface/product.interface";

const SeeDetails = ({data}:{data: ISubcategory}) => {
    const navigate = useNavigate();
//     const queryParams = new URLSearchParams(window.location.search);
//   const subcategoryId = queryParams.get("scid");
    const handleRouteToSubcategoryDetails = () =>{
        navigate(`/subcategory-details?cid=${data.category_object_id}&scid=${data._id}`)
    }
  return (
    <Button variant="outlined" className='blue-outlined-button' onClick={handleRouteToSubcategoryDetails}>See Details</Button>
  )
}

export default SeeDetails;