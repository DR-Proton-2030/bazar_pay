import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { OrdersColDefs } from '../../../../../constants/orders/OrderColDefs'

const Orders = () => {
    const [rowData, setRowData] = useState([])
  return (
    <div>
        <DataGrid rowData={rowData} colDefs={OrdersColDefs}/>
    </div>
  )
}

export default Orders