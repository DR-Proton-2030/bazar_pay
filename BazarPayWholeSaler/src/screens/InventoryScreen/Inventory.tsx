import React, { useContext, useEffect, useState } from 'react'
import { globalStyle } from '../../globalStyles/globalStyles'
import { LinearGradient } from 'expo-linear-gradient'
import { View } from 'react-native'
import Colors from '../../constants/Colors'
import { StatusBar } from 'expo-status-bar'
import { InventoryList } from '../../components/main/inventoryList/InventoryList'
import { InventorySearch } from '../../components/main/inventorySearch/InventorySearch'
import { api } from '../../utils/api'
import AuthContext from '../../contexts/authContext/authContext'

const InventoryScreen = () => {

  const {user}=useContext(AuthContext)
  const [Inventories,setInventories]=useState<any>([])

  const getInventoryList = async() =>{
    try {
      const filter ={
        wholesaler_object_id: user?._id
      }
      const result = await api.inventory.getInventoryList(filter)
      console.log("===>Inventoy list",result)
      setInventories(result)
    } catch (error) {
      
    }
  }

  useEffect(() => {
   getInventoryList()
  }, [])
  

  return (
    <View style={{ flex: 1, backgroundColor: "white", }}>
      <StatusBar style='dark' />
      <InventorySearch  />
      <InventoryList Inventories={Inventories} getInventoryList={getInventoryList}/>
    </View>
  )
}

export default InventoryScreen