import React from "react";
import { BookingColDefs } from "../../../../constants/booking/bookingColDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";

type Props = {};

const NewEnquiryPage = (props: Props) => {
  return (
    <div>
      <DataGrid colDefs={BookingColDefs} rowData={[]} key={0} />
    </div>
  );
};

export default NewEnquiryPage;