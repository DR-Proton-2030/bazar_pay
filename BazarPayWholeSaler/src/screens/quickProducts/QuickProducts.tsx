import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { api } from '../../utils/api'
import SmallBox from '../../components/shared/smallBox/SmallBox'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router'

export interface IProduct {
  _id: string
  product_name: string
  product_description: string
  product_image: string 
  unit: string;
 product_status: string;
}

const QuickProductList: React.FC = () => {
  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const [productList, setProductList] = useState<IProduct[]>([])
  const { categoryId, subcategoryId, brandId } = route.params

  const getAllProducts = async () => {
    const filter = {
        category_object_id: categoryId,
        subcategory_object_id:subcategoryId,
        brand_object_id:brandId
    }
    try {
      console.log("filter===>",filter);
      const {result} = await api.product.getProductList(filter);
      console.log("=====>products", result)
      setProductList(result)
    } catch (error) {
      console.log("error in getAllProducts", error)
    }
  }

  const handleNavigate = (productId: string) => {
    navigation.navigate('QuickAddProduct', {
      productId: productId
    })
    console.log("Navigating to QuickAddProduct with productId:", productId)
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <View style={styles.container}>
      {productList.map((product) => (
        <View key={product._id} style={styles.productItem}>
          <SmallBox
            title={product?.product_name}
            logo={product?.product_image} 
            icon={undefined}
            textColor={''}
            handleNavigate={() => handleNavigate(product._id)}
          />
        </View>
      ))}
      <TouchableOpacity onPress={() => handleNavigate("60e8c41e4e7a7c001f5241f0")}>
        <Text>
          Choose product
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  productItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  productText: {
    fontSize: 16,
    color: 'black'
  }
})

export default QuickProductList
