import { Avatar } from '@mui/material'
import React from 'react'
import { ISubcategory } from '../../../../../@types/interface/subcategory.interface'

const SubcategoryCellRenderer = ({data} : {data : ISubcategory}) => {
  return (
    <div  style={{ display: "flex", alignItems: "center" }}>
        <Avatar alt='logo' src={data.sub_category_image} style={{ width: 30, height: 30 }}/>
        <span style={{ marginLeft: 4 }}>{data.name}</span>
    </div>
  )
}

export default SubcategoryCellRenderer;