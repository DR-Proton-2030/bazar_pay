import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { ListedProductsColDefs } from '../../../../../constants/listedProductColDefs.ts/ListedProductColDefs'

const ListedProducts = () => {
    const [rowData, setRowData] = useState([])
  return (
    <div>
        <DataGrid rowData={rowData} colDefs={ListedProductsColDefs}/>
    </div>
  )
}

export default ListedProducts