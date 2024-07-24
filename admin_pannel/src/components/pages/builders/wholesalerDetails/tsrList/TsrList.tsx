import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { TsrColDefs } from '../../../../../constants/tsrlist/TsrColDefs'

const TsrList = () => {
    const [rowData,setRowData] = useState([])
  return (
    <div>
        <DataGrid rowData={rowData} colDefs={TsrColDefs}/>
    </div>
  )
}

export default TsrList