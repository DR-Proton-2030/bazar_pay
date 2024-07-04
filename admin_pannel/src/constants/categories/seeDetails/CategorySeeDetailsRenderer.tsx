import { Button } from "@mui/material"

import { useNavigate } from "react-router-dom"
import { ICategory } from "../../../@types/interface/category.interface";

const CategoryDetailsCellRenderer = ({data}:{data: ICategory}) => {
    const navigate = useNavigate();
    // const handleRouteToProjectDetails = () =>{
    //     navigate(`/admin/select-plots?pid=${data._id}`)
    // }
  return (
    <Button variant="outlined" className='blue-outlined-button' >See Details</Button>
  )
}

export default CategoryDetailsCellRenderer;