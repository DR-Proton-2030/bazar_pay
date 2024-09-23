import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import ClearIcon from "@mui/icons-material/Clear";
import { IconButton } from "@mui/material";
import DeleteModal from "../../../shared/deleteModal/DeleteModal";
import { api } from "../../../../utils/api";

const DeleteCellRenderer = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <IconButton onClick={handleClickOpen}>
        <DeleteIcon sx={{color: "#E72929"}}/>
      </IconButton>

      <DeleteModal
        open={open}
        label={"Are You Sure?"}
        content={
          "All subcategories and products under this category will also be deleted"
        }
        handleClose={handleClose}
      />
    </React.Fragment>
  );
};

export default DeleteCellRenderer;
