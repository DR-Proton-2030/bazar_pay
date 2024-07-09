import React from 'react'
import { ISubcategory } from '../../../@types/interface/subcategory.interface'
import { IDate } from '../../../@types/interface/date.interface';

const FormattedDateCellRenderer = ({data} : {data : IDate}) => {
  return (
    <div>
        <span>{new Date(data.createdAt).toLocaleDateString("en-GB")}</span>
    </div>
  )
}

export default FormattedDateCellRenderer;