import { Avatar } from "@mui/material";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { IWholesaler } from "../../../../@types/interface/wholesaler";

const OwnerCellRenderer = ({ data }: { data: IWholesaler }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="logo"
        src={data.wholesaler_owner_photo}
        style={{ width: 30, height: 30 }}
      />

      <span style={{ marginLeft: 4 }}> {data.owner_name}</span>
    </div>
  );
};

export default OwnerCellRenderer;