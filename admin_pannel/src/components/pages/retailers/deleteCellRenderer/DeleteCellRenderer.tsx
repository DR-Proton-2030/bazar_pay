import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import DeleteModal from "../../../shared/deleteModal/DeleteModal";
import { api } from "../../../../utils/api";

const DeleteCellRenderer = ({ data }: { data: any }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const retailerId = data._id;
      const result = await api.retailer.deleteRetailer(retailerId);
      if (result) {
        alert("Retailer Deleted Successfully");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert("Failed to delete retailer");
    }
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon sx={{ color: "#E72929" }} />
      </IconButton>

      <DeleteModal
        open={open}
        label={"Are You Sure?"}
        handleDelete={handleDelete}
        content={
          "This action will delete the retailer along with this retailer details"
        }
        handleClose={handleClose}
      />
    </React.Fragment>
  );
};

export default DeleteCellRenderer;
