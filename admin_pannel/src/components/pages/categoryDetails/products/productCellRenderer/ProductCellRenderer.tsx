import { Avatar } from "@mui/material";
import { IProduct } from "../../../../../@types/interface/product.interface";



const ProductCellRenderer = ({ data }: { data: IProduct }) => {
  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Avatar alt="logo" src={data.product_image} style={{ width: 30, height: 30 }} />

      <span style={{ marginLeft: 4 }}>{data.product_name}</span>
    </div>
  );
};

export default ProductCellRenderer;