import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { OrdersColDefs } from '../../../../../constants/orders/OrderColDefs'

const Orders = ({orderList}:any) => {
  return (
    <div>
        <DataGrid rowData={orderList} colDefs={OrdersColDefs}/>
    </div>
  )
}

export default Orders