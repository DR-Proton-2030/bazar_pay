import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useCallback } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IModalProps } from "../../../@types/props/modal.props";
import { api } from "../../../utils/api";

const DeleteModal: React.FC<IModalProps> = ({
  open,
  label,
  content,
  handleClose,
}) => {
 
    
  const handleDelete = async (categoryId: any) => {
    try {
      const result = await api.category.deleteCategory(categoryId);
      if (result) alert("Category Deleted Successfully");
    } catch (error) {
      alert("Failed to delete category");
    }
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          <label>{label}</label>
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <p>{content}</p>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            onClick={handleClose}
            className="gray-outlined-button"
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            className="delete-button"
            onClick={handleDelete}
            endIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteModal;
