import React, { useState } from 'react';
import {
    View,
    Animated,
    Text,
    ActivityIndicator,
    Modal,
    TouchableOpacity,
} from 'react-native';

import LottieView from 'lottie-react-native';
import { styles } from '../style';
import ProductCard from '../../../components/shared/productSmallCard.tsx/ProductSmallCard';
import BotMessage from '../../../components/shared/robotMessage/BotMessege';
import ProductRequestModal from '../../../components/shared/productRequestModal/ProductRequestModal';

const SearchProductList = ({ products, loading, animationData2, scrollY, searched }: any) => {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <Animated.ScrollView
            contentContainerStyle={styles.content}
            onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                {
                    useNativeDriver: true,
                },
            )}
            scrollEventThrottle={1}>
            {
                searched &&

                <BotMessage modalOpen={() => setModalVisible(true)} 
                text={"আপনার প্রয়োজনীয় পণ্যটি যদি এখানে না থাকে, আপনি পণ্যটির জন্য অনুরোধ করতে পারেন।"} />

            }
            {
                products?.length > 0 ?
                    <View style={styles.productContainer}>
                        {products.map((product: any) => (
                            <ProductCard key={product._id} product={product} categoryName={"categoryName"} />
                        ))}
                    </View>
                    : loading ?
                        <>
                            {animationData2 ? (
                                <LottieView
                                    source={animationData2}
                                    autoPlay
                                    loop
                                    style={{ width: 400, height: 400 }} // Adjust size as needed
                                />
                            ) : (
                                <ActivityIndicator size="small" color="#0000ff" />
                            )}
                            <Text style={{ fontSize: 22, textAlign: "center", marginTop: -140, fontWeight: "500" }}>
                                Searching....
                            </Text>
                        </>
                        :
                        <>
                            {animationData2 ? (
                                <LottieView
                                    source={animationData2}
                                    autoPlay
                                    loop
                                    style={{ width: 400, height: 400 }} // Adjust size as needed
                                />
                            ) : (
                                <ActivityIndicator size="small" color="#0000ff" />
                            )}
                            {
                                searched ?
                                    <Text style={{ fontSize: 22, textAlign: "center", marginTop: -140, fontWeight: "500" }}>
                                        No search results found
                                    </Text>
                                    :
                                    <Text style={{ fontSize: 22, textAlign: "center", marginTop: -140, fontWeight: "500" }}>
                                        Search Products at lowest price
                                    </Text>
                            }

                        </>
            }

            <ProductRequestModal modalVisible={modalVisible} setModalVisible={setModalVisible} />

        </Animated.ScrollView>
    )
}

export default SearchProductList