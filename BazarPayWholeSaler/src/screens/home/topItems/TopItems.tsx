import { ScrollView } from 'react-native'
import React from 'react'
import SmallCard from '../../../components/shared/smallCard/SmallCard';
import { FontAwesome } from "@expo/vector-icons";
import Colors from '../../../constants/Colors';

const TopItems = () => {
  return (
    <ScrollView
    style={{ paddingLeft: 10, marginTop:20}}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
    <SmallCard
      title={"Low Stock 10 Items"}
      subTitle="See Details"
      icon={
        <FontAwesome
          name="bell"
          size={22}
          color={Colors.light.secondary}
        />
      }
    />
  </ScrollView>
  )
}

export default TopItems