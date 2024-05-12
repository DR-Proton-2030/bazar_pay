import { Avatar } from "@mui/material";


const NameCellRenderer = ({ data }: { data: any }) => {
  // console.log(data);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={data.customer.profile_photo}
        style={{ width: 30, height: 30 }}
      />

      <span style={{ marginLeft: 4 }}>{data.customer.full_name}</span>
    </div>
  );
};

export default NameCellRenderer;
