import { Avatar } from "@mui/material";
import { IBuilder } from "../../../../@types/interface/Builder.interface";

const BuilderNameCellRenderer = ({ data }: { data: IBuilder }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar
        alt="logo"
        src={data.builder_logo}
        style={{ width: 30, height: 30 }}
      />

      <span style={{ marginLeft: 4 }}> {data.builder_name}</span>
    </div>
  );
};

export default BuilderNameCellRenderer;
