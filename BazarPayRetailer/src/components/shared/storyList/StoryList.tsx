import React from 'react'
import { ScrollView } from 'react-native'
import ImageCard from '../imageCrad/ImageCard'


const StoryList = () => {
    const storiesData = [
        { id: 1, img: "https://images.pexels.com/photos/1233648/pexels-photo-1233648.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "Fresh, Healthier" },
        { id: 2, img: "https://images.pexels.com/photos/994843/pexels-photo-994843.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "New, Look" },
        { id: 3, img: "https://images.pexels.com/photos/3070295/pexels-photo-3070295.jpeg?auto=compress&cs=tinysrgb&w=600", text: "wow, Deals" },
        { id: 4, img: "https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "wow, Deals" },
        { id: 5, img: "https://images.pexels.com/photos/1191716/pexels-photo-1191716.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2", text: "wow, Deals" },
      ];

  return (
    <ScrollView
    style={{ paddingLeft: 10 }}
    horizontal={true}
    showsHorizontalScrollIndicator={false}
  >
   {storiesData.map((item) => (
        <ImageCard key={item.id} img={item.img} text={item.text} /> // Use unique key
      ))}
  </ScrollView>
  )
}

export default StoryList