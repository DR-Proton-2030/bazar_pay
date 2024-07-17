import { Avatar } from "@mui/material";
import { IBuilder } from "../../../../@types/interface/Builder.interface";
import { IWholesaler } from "../../../../@types/interface/wholesaler.interface";

const LogoCellRenderer = ({ data }: { data: IWholesaler }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="logo"
        src={data.logo}
        style={{ width: 30, height: 30 }}
      />

<span style={{ marginLeft: 4 }}> {data.wholesaler_name}</span>
    </div>
  );
};

export default LogoCellRenderer;