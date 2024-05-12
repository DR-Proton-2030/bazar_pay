import React, { useContext, useEffect } from 'react'
import UIContext from '../../../contexts/uiContext/UIContext'

const Reports = () => {
  const { setDashboardHeader} = useContext(UIContext)

  useEffect(() => {
    setDashboardHeader("Reports")
  },[setDashboardHeader])
  return (
    <div>
      reports
    </div>
  )
}

export default Reports
