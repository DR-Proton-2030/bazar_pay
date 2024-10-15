import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import DeleteModal from "../../../../shared/deleteModal/DeleteModal";
import { api } from "../../../../../utils/api";
import { IProduct } from "../../../../../@types/interface/product.interface";



const DeleteCellRenderer = ({ data }: { data: IProduct }) => {
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
      if (!productId) {
        alert("Product ID is invalid");
        return;
      }

      // console.log("product ID:", productId);
     
      const result = await api.product.deleteProductById(productId);
      console.log("Delete API response:", result);
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

        handleClose={handleClose} content={""}      />
    </React.Fragment>
  );
};

export default DeleteCellRenderer;
