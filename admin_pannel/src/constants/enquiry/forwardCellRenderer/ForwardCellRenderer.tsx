import React, { useContext, useEffect, useState } from "react";
import SwitchCellRenderer from "../../../components/shared/cellRenderer/SwitchCellRenderer";
import { ENQUIRY_STATUS } from "../../enquiryStatus/EnquiryStatus";
import { IBooking } from "../../../@types/interface/booking.interface";
import { api } from "../../../utils/api";
import { IForwardedEnquiry } from "../../../@types/interface/forwardEnqury.interface";
import BuilderContext from "../../../contexts/builderContext/BuilderContext";
import AuthContext from "../../../contexts/authContext/authContext";

const ForwardCellRenderer = ({ data }: { data: IBooking }) => {
  const [isForwarded, setIsForwarded] = useState<boolean>(false);
  const {builderDetails} = useContext(BuilderContext);
  const {user} = useContext(AuthContext)

  const handleForwardEnqury = async() =>{
    if(builderDetails && builderDetails._id && data._id && user && user._id){
        const payload = {
            builder_object_id:builderDetails?._id,
            customer_object_id: data.customer_object_id,
            enquiry_object_id: data._id,
            forwarded_by: user._id,
            plot_object_id: data.plot_object_id,
            project_object_id: data.project_object_id
        }
        const response = await api.booking.forwardEnqury(payload);
        if(response){
            setIsForwarded(true);
        }
    }
  }
  
  useEffect(()=>{
    setIsForwarded(data.enqury_status===ENQUIRY_STATUS.forwarded)
  },[data])

  return <SwitchCellRenderer checked={isForwarded} key={0} handleChange={handleForwardEnqury}/>;
};

export default ForwardCellRenderer;
