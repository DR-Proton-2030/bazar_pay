import React, { useState } from 'react'
import DataGrid from '../../../../shared/dataGrid/DataGrid'
import { ListedProductsColDefs } from '../../../../../constants/listedProductColDefs.ts/ListedProductColDefs'

const ListedProducts = ({productList}:any) => {
  return (
    <div>
        <DataGrid rowData={productList} colDefs={ListedProductsColDefs} onFilterChange={function (filterModel: { [key: string]: { filterType: string; type?: string; filter?: string | number } }): void {
        throw new Error('Function not implemented.')
      } }/>
    </div>
  )
}

export default ListedProducts