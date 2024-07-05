import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native'
import { api } from '../../utils/api'
import SmallBox from '../../components/shared/smallBox/SmallBox'
import { useRoute } from '@react-navigation/native'
import { useNavigation } from 'expo-router'
import { IBrand } from '../../@types/props/IBrand'

const BrandList: React.FC = () => {
  const route = useRoute<any>()
  const navigation = useNavigation<any>()
  const [brandList, setBrandList] = useState<IBrand[]>([])
  const { categoryId ,subcategoryId} = route.params
  const getAllBrandList = async () => {
    const filter = {
      page: 1
    }
    try {
      const result = await api.brands.getBrandList(filter)
      console.log("=====>brands",result)
      setBrandList(result)
    } catch (error) {
      console.log("error in getAllBrandList", error)
    }
  }

  const handleNavigate = (id:string) => {
    navigation.navigate('quickProductList', { 
      subcategoryId: subcategoryId,
      categoryId:categoryId,
      brandId:id 
    })
    console.log("first")
  }

  useEffect(() => {
    getAllBrandList()
  }, [])

  return (
    <View style={styles.container}>
      {brandList.map((brand) => (
        <View key={brand._id} style={styles.brandItem}>
          <SmallBox
            title={brand.name}
            logo={brand.logo}
            icon={undefined}
            textColor={''}
            handleNavigate={() => handleNavigate(brand?._id)}
          />
        </View>
      ))}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding:10,
    justifyContent:"center",
    flexDirection:"row",
    flexWrap:"wrap"
  },
  brandItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  brandText: {
    fontSize: 16,
    color: 'black'
  }
})

export default BrandList
