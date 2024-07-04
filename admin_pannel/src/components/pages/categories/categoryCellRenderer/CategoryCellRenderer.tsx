import { Avatar } from "@mui/material";
import { ICustomer } from "../../../../@types/interface/Customer.interface";
import { ICategory } from "../../../../@types/interface/category.interface";

const CategoryCellRenderer = ({ data }: { data: ICategory }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar alt="logo" src={data.logo} style={{ width: 30, height: 30 }} />

      <span style={{ marginLeft: 4 }}>{data.name}</span>
    </div>
  );
};

export default CategoryCellRenderer;
