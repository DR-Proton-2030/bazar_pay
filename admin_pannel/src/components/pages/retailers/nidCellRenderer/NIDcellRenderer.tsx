import { IWholesaler } from "../../../../@types/interface/wholesaler.interface";
import React from "react";

import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import { IRetailers } from "../../../../@types/interface/retailer.interface";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
    width: '500px',
    height: 'auto'
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const NIDcellRenderer = ({ data }: { data: IRetailers }) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpenModal = () => {
    setOpen(true);
  };
  return (
    <div>
      <button onClick={handleOpenModal} style={{ cursor: "pointer" }}>
        <RemoveRedEyeIcon sx={{ color: "gray" }} />
      </button>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
         NID photo
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <div style={{ width:"100%", height: "auto" }}>
            <img
              src={data.nid_photo}
              style={{ maxWidth: "100%", maxHeight: "100%" }}
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
};

export default NIDcellRenderer;
