import { Button } from "@mui/material"

import { useNavigate } from "react-router-dom"
import { ISubcategory } from "../../../../../@types/interface/subcategory.interface";

const SeeDetails = ({data}:{data: ISubcategory}) => {
    const navigate = useNavigate();
    const handleRouteToSubcategoryDetails = () =>{
        navigate(`/subcategory-details?cid=${data.category_object_id}`)
    }
  return (
    <Button variant="outlined" className='blue-outlined-button' onClick={handleRouteToSubcategoryDetails}>See Details</Button>
  )
}

export default SeeDetails;