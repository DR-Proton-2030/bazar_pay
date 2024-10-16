import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton } from "@mui/material";
import DeleteModal from "../../../components/shared/deleteModal/DeleteModal";
import { api } from "../../../utils/api";


const SubcategoryDeleteCellRenderer = ({ data }: { data: any }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = async () => {
    try {
      const subcategoryId = data._id;
      const result = await api.subcategory.deleteSubcategory(subcategoryId);
      if (result) {
        alert("Subcategory Deleted Successfully");
        handleClose();
        window.location.reload();
      }
    } catch (error) {
      alert("Failed to delete subcategory");
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
          "All products under this subcategory will also be deleted"
        }
        handleClose={handleClose}
      />
    </React.Fragment>
  );
};

export default SubcategoryDeleteCellRenderer;
