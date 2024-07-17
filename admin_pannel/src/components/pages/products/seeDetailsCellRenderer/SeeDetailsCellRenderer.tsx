import { Button } from "@mui/material"
import { IProject } from "../../../../@types/interface/Projects"
import { useNavigate } from "react-router-dom"
import { IWholesaler } from "../../../../@types/interface/wholesaler";

const WholesalerDetailsCellRenderer = ({data}:{data: IWholesaler}) => {
    const navigate = useNavigate();
    const handleRouteToWholesalerDetails = () =>{
        navigate(`/wholesaler-details?wid=${data._id}`)
    }
  return (
    <Button variant="outlined" className='blue-outlined-button' onClick={handleRouteToWholesalerDetails}>See Details</Button>
  )
}

export default WholesalerDetailsCellRenderer