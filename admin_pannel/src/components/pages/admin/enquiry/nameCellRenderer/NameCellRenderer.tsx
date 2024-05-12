import { Avatar } from "@mui/material";
import { IBooking } from "../../../../../@types/interface/booking.interface";

const NameCellRenderer = ({ data }: { data: IBooking }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt={data.customer?.full_name}
        src={data.customer?.profile_photo}
        style={{ width: 30, height: 30 }}
      />

      <span style={{ marginLeft: 4 }}>{data.customer?.full_name}</span>
    </div>
  );
};

export default NameCellRenderer;
