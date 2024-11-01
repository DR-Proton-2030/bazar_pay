import React from 'react'
import { TouchableOpacity,Text,Image } from 'react-native'

const BotMessage = ({text,modalOpen}:any) => {
  return (
    <TouchableOpacity 
    onPress={modalOpen}
    style={{
        backgroundColor: "white",
        borderWidth: 0.5,
        borderTopLeftRadius: 12,
        borderTopRightRadius: 12,
        borderBottomLeftRadius: 12,
        borderBottomRightRadius: 1,
        padding: 10,
        marginTop: -10,
        position: 'relative', 
        width:"88%"
      }}>
        <Text> {text}&nbsp;
          <Text style={{color:"blue",  textDecorationLine: "underline",marginLeft:5}}>
            Click Here

          </Text>
        </Text>
  
        <Image
          source={{ uri: 'https://threedio-prod-var-cdn.icons8.com/qn/preview_sets/previews/flLwM3jb71uIqBoP.webp' }}
          style={{
            width: 80,
            height: 80,
            position: 'absolute',
            bottom: -32, // Adjust to position slightly outside the component
            right: -65,  // Align at the bottom-right corner
            borderRadius: 12, // Make the image round
          }}
        />
      </TouchableOpacity>
  )
}

export default BotMessage