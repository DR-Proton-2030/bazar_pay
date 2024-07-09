import React, { useContext, useEffect } from 'react'
import UIContext from '../../../../../contexts/uiContext/UIContext'

const Details = () => {
    const {setDashboardHeader} = useContext(UIContext)
    useEffect(() => {
        setDashboardHeader("Subcategory Details")
    }, [setDashboardHeader])
  return (
    <div>
        sub category info
    </div>
  )
}

export default Details