import { Paper, Typography } from '@mui/material'
import React from 'react'

const WholesalerContactPerson = ({wholesalerDetail}:any) => {
  return (
    <div>
      <Paper elevation={2} sx={{ p: 2, mb: 2 }}>
              <Typography variant="h6" gutterBottom>Contact Person Details</Typography>
              <Typography variant="body1"><strong>Contact Person Phone:</strong> {wholesalerDetail.owner_name}</Typography>
              <Typography variant="body1"><strong>Contact Person Phone:</strong> {wholesalerDetail.owner_phone}</Typography>
              <Typography variant="body1"><strong>Contact Person Email:</strong> {wholesalerDetail.owner_email}</Typography>
            </Paper>
    </div>
  )
}

export default WholesalerContactPerson