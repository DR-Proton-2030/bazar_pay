import React from 'react'

const DataCellRenderer = ({value}:any) => {
  return (
    <div>
        {value? value : "N/A"}
    </div>
  )
}

export default DataCellRenderer