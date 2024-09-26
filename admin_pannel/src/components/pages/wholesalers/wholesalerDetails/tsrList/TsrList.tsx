import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { TsrColDefs } from '../../../../../constants/tsrlist/TsrColDefs'

const TsrList = () => {
    const [rowData,setRowData] = useState([])
  return (
    <div>
        <DataGrid rowData={rowData} colDefs={TsrColDefs} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number } }): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}

export default TsrList