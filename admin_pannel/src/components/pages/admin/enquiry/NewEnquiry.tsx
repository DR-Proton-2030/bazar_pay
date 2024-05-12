import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import { useCallback, useContext, useEffect, useState } from "react";
import UIContext from "../../../../contexts/uiContext/UIContext";
import { enquiryColumnDef } from "../../../../constants/enquiry/EnquiryColDef";
import { IBooking } from "../../../../@types/interface/booking.interface";
import { api } from "../../../../utils/api";
import BuilderContext from "../../../../contexts/builderContext/BuilderContext";

const NewEnquiry = () => {
  const {setDashboardHeader} = useContext(UIContext);
  const {builderDetails} = useContext(BuilderContext);
  const [bookingList,setBookingList] = useState<IBooking[]>([]);

  const getEnquiryData = useCallback(async () => {
    const filter = {
      page:1,
      sortField:"updatedAt",
      builder_object_id:builderDetails?._id
    }
    const response = await api.booking.getBooking(filter);
    setBookingList(response);
  },[builderDetails])

  useEffect(() => {
    setDashboardHeader("All Customer Enquiry");
  }, [setDashboardHeader]);

  useEffect(() => {
    getEnquiryData();
  }, [getEnquiryData]);

  return (
    //admin enquiry ag-grid starts here
    <div className="ag-theme-alpine" style={{ height: 500, width: "full" }}>
      <AgGridReact rowData={bookingList} columnDefs={enquiryColumnDef} />
    </div>
  );
};

export default NewEnquiry;
