import { Avatar } from "@mui/material";
import { ICustomer } from "../../../../@types/interface/Customer.interface";
import { ICategory } from "../../../../@types/interface/category.interface";

const NameCellRenderer = ({ data }: { data: ICustomer }) => {
  // console.log(data);
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="Remy Sharp"
        src={data.profile_photo}
        style={{ width: 30, height: 30 }}
      />

      <span style={{ marginLeft: 4 }}>{data.full_name}</span>
    </div>
  );
};

export default NameCellRenderer;
