import { Button } from '@mui/material'
import React, { useState } from 'react'

const ActionCellRenderer = ({checked, handleChange}:{checked: boolean, handleChange : ()=>void}) => {
  return (
    <Button variant="outlined" className='green-outlined-button'>See Enquiry Details</Button>
  )
}

export default ActionCellRenderer;