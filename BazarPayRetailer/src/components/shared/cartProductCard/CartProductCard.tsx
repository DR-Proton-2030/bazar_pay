import { View,Image ,Text,TouchableOpacity} from "react-native";
import { styles } from "../../../screens/cart/cartstyle";



export const RenderProductCartItem = ({ item,handleDecrement,handleIncrement }:any) => (
  <View style={styles.cartItem} key={item?._id}>
  <Image source={{ uri: item?.product_image }} style={styles.productImage} />
  <View style={styles.productDetails}>
    <Text style={styles.productName}>{item?.product_name}</Text>
    <View style={styles.priceContainer}>
      <Text style={styles.productPriceOriginal}>৳{item?.Total}</Text>
      <Text style={styles.productPriceDiscounted}>৳{(item?.Total * 0.9)}</Text>
    </View>

  </View>
  <View style={styles.quantityContainer}>
      <TouchableOpacity
        //  onPress={() => handleDecrement(item.id)} 
        style={styles.quantityButton}>
        <Text style={styles.quantityButtonText}>-</Text>
      </TouchableOpacity>
      <Text style={styles.quantityText}>{item?.current_stock}</Text>
      <TouchableOpacity
        // onPress={() => handleIncrement(item.id)} 
        style={styles.quantityButton}>
        <Text style={styles.quantityButtonText}>+</Text>
      </TouchableOpacity>
    </View>
</View>
  );