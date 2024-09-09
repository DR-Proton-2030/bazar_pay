import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { ListedProductsColDefs } from '../../../../../constants/listedProductColDefs.ts/ListedProductColDefs'

const ListedProducts = ({productList}:any) => {
  return (
    <div>
        <DataGrid rowData={productList} colDefs={ListedProductsColDefs}/>
    </div>
  )
}

export default ListedProducts