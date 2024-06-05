import { Button } from "@mui/material"
import { IProject } from "../../../../@types/interface/Projects"
import { useNavigate } from "react-router-dom"

const SeeDetailsCellRenderer = ({data}:{data: IProject}) => {
    const navigate = useNavigate();
    const handleRouteToProjectDetails = () =>{
        navigate(`/admin/select-plots?pid=${data._id}`)
    }
  return (
    <Button variant="outlined" className='green-outlined-button' onClick={handleRouteToProjectDetails}>See Details</Button>
  )
}

export default SeeDetailsCellRenderer