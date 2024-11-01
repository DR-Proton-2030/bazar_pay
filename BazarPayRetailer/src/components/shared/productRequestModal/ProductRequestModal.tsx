import React, { useCallback, useState } from 'react'
import { Modal, View, Text, TextInput, TouchableHighlightComponent, TouchableOpacity, Alert, ActivityIndicator } from 'react-native'
import { styles } from '../../../screens/searchScreen/style'
import MultipleImagePicker from '../multipleImagePicker/MultipleImagePicker';
import LottieView from 'lottie-react-native';
import { api } from '../../../utils/api';

const ProductRequestModal = ({ modalVisible, setModalVisible }: any) => {

    const [productName, setProductName] = useState<any>(null);
    const [images, setImages] = useState<string[]>([]);
 const [loading, setLoading] = useState<boolean>(false);
    const [success, setSuccess] = useState<boolean>(false);

    const handleCreateProduct = async () => {

        setLoading(true)
    
        const formDataToSend = new FormData();
    
        formDataToSend.append("product_name",productName);
      
        if (images && images.length > 0) {
          images.forEach((imageUri, index) => {
            const file: any = {
              uri: imageUri,
              name: `product_image_${index + 1}.jpg`,  
              type: "image/jpeg",
            };
            formDataToSend.append("product_image", file);  
          });
        }
      
        try {
          console.log("===> Form Data:", formDataToSend);
      
          const result = await api.product.requestProduct(formDataToSend);
          console.log("======> Response:", result);
        setSuccess(true)
        setImages([])
        setProductName(null)
        } catch (error) {
          console.log("Error creating Product:", error);
          Alert.alert("Error","Error Creating Product")
        } finally {
          setLoading(false)
        }
      }

    return (
        <Modal
            visible={modalVisible}
            transparent
            animationType="slide"
            onRequestClose={() => setModalVisible(false)}
        >
            <View
                style={styles.modalOverlay}
            >
                <View style={styles.bottomSheet}>
                    {
                        success ?
                        <>
                        <LottieView
                        source={require('../../../../assets/animations/category/Animation - 1730470981642.json')}
                        autoPlay
                        loop={false}
                        style={styles.animation}
                        />
                         <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5,textAlign:"center",marginTop:-160 }}>
                        Request Successful
                    </Text>
                    <Text style={{ fontSize: 14, fontWeight: '600', marginBottom: 20,textAlign:"center",marginTop:-1,color:"gray" }}>
                       Your Product request has been sent successfully
                    </Text>
                    <TouchableOpacity style={styles.Button} onPress={()=>{
                        setModalVisible(false)
                        setSuccess(false)
                        }}>
                        <Text style={[styles.inputLabel,{ marginBottom: 0 , color:"white"}]}>Go Back</Text>
                        </TouchableOpacity>
                        </>
                      :
                      <>
                       <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5,paddingTop:5 }}>
                        Request a Product
                    </Text>
                    <Text style={{ fontSize: 16, color: '#555' }}>
                        Let us know what product you’re looking for, and we’ll do our best to add it.
                    </Text>

                    <View style={styles.form}>

                        <View style={{}}>
                            <Text style={styles.inputLabel}>Product Name</Text>
                            <TextInput
                                clearButtonMode="while-editing"
                                onChangeText={product_name => setProductName(product_name)}
                                placeholder="Enter product name here"
                                placeholderTextColor="#6b7280"
                                style={styles.inputControl}
                            value={productName}
                            />
                        </View>
                        <View style={{ height: 200, marginTop: 10 }}>
                            <Text style={styles.inputLabel}>Product Images</Text>
                            <MultipleImagePicker images={images} setImages={setImages} />
                        </View>

                        <TouchableOpacity style={styles.Button} onPress={productName !== null ? handleCreateProduct : ()=>{
                            Alert.alert("Warning","Please Fill the form first")
                        }}>
                            {
                                loading?
                                <ActivityIndicator/>
                                :
                                <Text style={[styles.inputLabel,{ marginBottom: 0 , color:"white"}]}>Send Request</Text>
                            }
                      
                        </TouchableOpacity>
                    </View>
                      </>

                    }
                   

                </View>
            </View>
        </Modal>
    )
}

export default ProductRequestModal