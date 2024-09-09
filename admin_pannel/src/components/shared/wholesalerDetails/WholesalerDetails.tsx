import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, Grid, Avatar, Box, Paper, Button, Modal, Backdrop, Fade } from '@mui/material';
import { api } from '../../../utils/api';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';


const WholesalerDetailsComponent = ({wholesalerDetail}:any) => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState('');

  const handleOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  if (!wholesalerDetail) {
    return <Typography>Loading...</Typography>;
  }

  return (
    <>
      <div style={{ display: "flex", gap: 20 }}>
        <Card elevation={2} sx={{ width: "30%", justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
          <Avatar
            src={wholesalerDetail.logo}
            alt="Wholesaler Logo"
            sx={{ width: 120, height: 120, mb: 2, marginTop: -4 }}
          />
          <div style={{ justifyContent: "center", display: "flex", alignItems: "center", flexDirection: "column" }}>
            <Typography variant="h5" color={"green"} gutterBottom>{wholesalerDetail.owner_name}</Typography>
            <Typography variant="body1"><strong>Phone Number:</strong>&nbsp; {wholesalerDetail.owner_phone}</Typography>
            <Typography variant="body1"><strong>Business Email:</strong>&nbsp; {wholesalerDetail.owner_email}</Typography>
          </div>
        </Card>
        <div style={{ width: "60%" }}>
          <Grid item xs={12}>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>Approval Status</Typography>
              <Typography variant="body1"><CheckCircleIcon color='success' />&nbsp;{wholesalerDetail.approval_status}</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>License & ID</Typography>
              <Typography variant="body1"><strong>Trade License Number:</strong> {wholesalerDetail.trade_licensce_number}</Typography>
              <Typography variant="body1"><strong>NID Number:</strong> {wholesalerDetail.nid_number}</Typography>
            </Paper>
            <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>Uploaded Documents</Typography>
              <Grid container spacing={2}>
                {[
                  wholesalerDetail.sign_board_photo,
                  wholesalerDetail.trade_licensce_photo,
                  wholesalerDetail.nid_photo,
                ].map((image, index) => (
                  <Grid item xs={2} key={index}>
                    <Box
                      component="img"
                      src={image}
                      alt={`Document ${index + 1}`}
                      sx={{ height:100 ,width: 100, cursor: 'pointer', borderRadius: 2,}}
                      onClick={() => handleOpen(image)}
                    />
                  </Grid>
                ))}
              </Grid>
            </Paper>
          </Grid>
        </div>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '40%',
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
          }}>
            <Box
              component="img"
              src={selectedImage}
              alt="Selected Document"
              sx={{ width: '100%', borderRadius: 2 }}
            />
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default WholesalerDetailsComponent;
