import React, { useContext, useEffect } from 'react'
import UIContext from '../../../../contexts/uiContext/UIContext'

const AddBrandDetails = () => {
    const {setDashboardHeader} = useContext(UIContext)

    useEffect(() => {
        setDashboardHeader("Add Brand Details")
    }, [setDashboardHeader])

  return (
    <div>AddBrandDetails</div>
  )
}

export default AddBrandDetails