import React, { useEffect, useState, } from 'react'
import { View, StyleSheet ,Text} from 'react-native'
import { useRoute, RouteProp } from '@react-navigation/native'
import { api } from '../../utils/api'
import SmallBox from '../../components/shared/smallBox/SmallBox'
import { useNavigation } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { ISubcategory } from '../../@types/props/ISubcategory'

type ParamList = {
  subcategoryPage: {
    categoryId: string
  }
}

const AllSubcategory: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'subcategoryPage'>>()
  const { categoryId } = route.params
  const navigation = useNavigation<any>()
  const [subcategoryList, setSubcategoryList] = useState<ISubcategory[]>([])

  const getAllSubcategory = async () => {
    const filter = {
        category_object_id: categoryId
      }
    try {
      const result = await api.subcategory.getSubategoryList(filter)
      setSubcategoryList(result) 

    } catch (error) {
      console.log("error in getAllSubcategory", error)
    }
  }

  const handleNavigate = (id:string) => {
    navigation.navigate('brandPage', { subcategoryId: id,categoryId:categoryId })
    console.log("first")
  }

  useEffect(() => {
    getAllSubcategory()
  }, [])

  return (
    <View style={styles.container}>
      {subcategoryList.map((subcategory) => (
        <View key={subcategory._id} style={styles.subcategoryItem}>
          <SmallBox
            title={subcategory.name}
            logo={subcategory.sub_category_image}
            icon={undefined}
            textColor={''}
            handleNavigate={() => handleNavigate(subcategory?._id)}
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
  subcategoryItem: {
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5
  },
  subcategoryText: {
    fontSize: 16,
    color: 'black'
  }
})

export default AllSubcategory
