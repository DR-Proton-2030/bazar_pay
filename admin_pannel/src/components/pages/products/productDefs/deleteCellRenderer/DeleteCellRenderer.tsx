import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import DeleteModal from "../../../../shared/deleteModal/DeleteModal";
import { api } from "../../../../../utils/api";
import { IProduct } from "../../../../../@types/interface/product.interface";

const DeleteCellRenderer = ({ data }: { data: any }) => {
  const [open, setOpen] = React.useState(false);
  // const queryParams = new URLSearchParams(window.location.search);
  // const productObjectId = queryParams.get("pid");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const productId = data._id;

      const result = await api.products.deleteProductById(productId);

      if (result) {
        alert("Product Deleted Successfully");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert("Failed to delete product");
    }
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: "#E72929" }} />
      </IconButton>

      <DeleteModal
        open={open}
        label={"Are You Sure you want to delete this product?"}
        handleDelete={handleDelete}
        handleClose={handleClose}
        content={""}
      />
    </React.Fragment>
  );
};

export default DeleteCellRenderer;
