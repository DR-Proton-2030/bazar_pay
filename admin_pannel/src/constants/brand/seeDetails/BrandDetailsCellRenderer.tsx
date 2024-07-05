import { Avatar } from "@mui/material";

import { IBrand } from "../../../@types/interface/brand.interface";

const BrandDetailsCellRenderer = ({ data }: { data: IBrand }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar alt="logo" src={data.logo} style={{ width: 30, height: 30 }} />

      <span style={{ marginLeft: 4 }}>{data.name}</span>
    </div>
  );
};

export default BrandDetailsCellRenderer;