import { BookingColDefs } from "../../../../constants/booking/bookingColDefs";
import DataGrid from "../../../shared/dataGrid/DataGrid";

const BookingHistoryPage = () => {
  return (
    <div>
      <DataGrid colDefs={BookingColDefs} rowData={[]} key={0} />
    </div>
  );
};

export default BookingHistoryPage;
