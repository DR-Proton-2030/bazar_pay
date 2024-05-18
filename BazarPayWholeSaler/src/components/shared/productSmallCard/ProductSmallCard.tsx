import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { productCardStyle } from './ProductSmallCard.style'
import Colors from '../../../constants/Colors'

const ProductSmallCard = () => {
  return (
    <TouchableOpacity style={productCardStyle.card}>
      {/* <View style={{ alignItems: "center", flexDirection: "row",gap:8 }}>
        {Icon}
        <View style={{flexDirection:"column"}}>
          <Text style={{ fontWeight: "600", fontSize:16, color: Colors.light.text }}>
            &nbsp;{title}
          </Text>
        </View>
      </View>
      <View style={{ alignItems: "center", flexDirection: "row", gap:5 }}>
        <Entypo name="chevron-thin-right" size={18} color={Colors.light.secondary} />
      </View> */}
    </TouchableOpacity>
  )
}

export default ProductSmallCard