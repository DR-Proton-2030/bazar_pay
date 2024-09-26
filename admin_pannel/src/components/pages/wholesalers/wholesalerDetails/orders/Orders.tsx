import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { OrdersColDefs } from '../../../../../constants/orders/OrderColDefs'

const Orders = ({orderList}:any) => {
  return (
    <div>
        <DataGrid rowData={orderList} colDefs={OrdersColDefs} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number } }): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}

export default Orders