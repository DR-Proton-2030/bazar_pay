import React from "react";
import { BookingColDefs } from "../../../../constants/booking/bookingColDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";

type Props = {};

const NewEnquiryPage = (props: Props) => {
  return (
    <div>
      <DataGrid colDefs={BookingColDefs} rowData={[]} key={0} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number; }; }): void {
        throw new Error("Function not implemented.");
      } } />
    </div>
  );
};

export default NewEnquiryPage;
