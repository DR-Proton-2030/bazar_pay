import React, { useEffect, useState } from 'react'
import SwitchCellRenderer from '../../../../shared/cellRenderer/SwitchCellRenderer'
import { api } from '../../../../../utils/api';

const BookCellRenderer = ({data}: any) => {
    const [isBooked,setIsBooked] = useState<boolean>(false);
    
    const handleChange = async() => {
        const payload ={
            enquiry_object_id: data.enquiry_object_id,
            plot_object_id: data.plot_object_id,
            status:"BOOKED"
        }
        const response = await api.booking.updateEnquiryStatus(payload);
        if(response){
            setIsBooked(true);
        }
    }

    useEffect(()=>{
        const {plot: {is_booked}} = data;
        setIsBooked(is_booked)
    },[data])
  return (
    <SwitchCellRenderer checked = {isBooked} handleChange={handleChange} key={1}/>
  )
}

export default BookCellRenderer