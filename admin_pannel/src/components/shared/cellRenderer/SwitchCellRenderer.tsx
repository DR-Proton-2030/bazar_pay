import { Switch } from '@mui/material'
import React, { useState } from 'react'

const SwitchCellRenderer = ({checked, handleChange}:{checked: boolean, handleChange : ()=>void}) => {
  return (
    <Switch color="success" checked={checked} onChange={handleChange}/>
  )
}

export default SwitchCellRenderer