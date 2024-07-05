import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { api } from '../../utils/api'
import SmallBox from '../../components/shared/smallBox/SmallBox'
import { ICategory } from '../../@types/props/ICategory'

const AllCategoryList: React.FC = () => {
  const [categoryList, setCategoryList] = useState<ICategory[]>([])
  const [currPage, setCurrpage] = useState<number>(1)
  const navigation = useNavigation<any>()

  const getAllCategory = async () => {
    const filter = {
      page: currPage
    }
    try {
      const result = await api.category.getCategoryList(filter)
      setCategoryList(result)
    } catch (error) {
      console.log("error in getAllCategory", error)
    }
  }

  const handleNavigate = (id: string) => {
    navigation.navigate('subcategoryPage', { categoryId: id })
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  return (
    <View style={styles.container}>
      {categoryList?.map((category) => (
        <View key={category._id} style={styles.categoryItem}>
          <SmallBox
            title={category.name}
            logo={category.logo}
            icon={undefined}
            textColor={''}
            handleNavigate={() => handleNavigate(category._id)}
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
  categoryItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  categoryText: {
    fontSize: 16,
    color: 'black'
  }
})

export default AllCategoryList
