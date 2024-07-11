import React, { useContext, useEffect } from 'react'
import UIContext from '../../../../../contexts/uiContext/UIContext'
import ProductDetails from '../../products/ProductDetails'

const Details = () => {
    const {setDashboardHeader} = useContext(UIContext)
    useEffect(() => {
        setDashboardHeader("Subcategory Details")
    },)
  return (
    <div>
        <ProductDetails/>
    </div>
  )
}

export default Details