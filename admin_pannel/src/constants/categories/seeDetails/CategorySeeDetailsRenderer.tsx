import { Button } from "@mui/material"

import { useNavigate } from "react-router-dom"
import { ICategory } from "../../../@types/interface/category.interface";

const CategoryDetailsCellRenderer = ({data}:{data: ICategory}) => {
    const navigate = useNavigate();
    const handleRouteToCategoryDetails = () =>{
        navigate(`/categories/category-details?cid=${data._id}`)
    }
  return (
    <Button variant="outlined" className='blue-outlined-button' onClick={handleRouteToCategoryDetails}>See Details</Button>
  )
}

export default CategoryDetailsCellRenderer;