import { useNavigation, useRoute } from '@react-navigation/native'
import React from 'react'
import { View,Text } from 'react-native-animatable'
import QuickAddProductForm from '../../components/main/quickAddProductForm/QuickAddProductForm'

const QuickAddProductPage = () => {
  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const { productId}:any = route.params
  return (
   <View style={{  flex:1,
    backgroundColor: '#fff',
    paddingHorizontal:10}}>

    <QuickAddProductForm productId={productId}/>
   </View>
  )
}

export default QuickAddProductPage