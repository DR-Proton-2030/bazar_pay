import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Colors from "../../../constants/Colors";

const OfferSection = ({ backgroundColor }: any) => {
  const [showCards, setShowCards] = useState(false);

  const handleAllCategoriesPress = () => {
    setShowCards(!showCards);
  };
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#C8F2FF" }]}>
          <View>
            <Text style={styles.text}>Winter</Text>
            <Text style={styles.text}>Offer</Text>
          </View>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/acc3/9b57/ce5e1e52ebeb61707d991fe82f6f0171?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCg5dc~rci~RQEFuFHkgjTLuQIZUv6Cue8Boe-tGEQ91P9k12i2Cq306mu-FQDEJ7krVl12maco1dD3xMiyeQExDcBjQK8h4fv-WckuVRW4Y4j6-Az0T12w6vDOC~0uCsVdUczFbU1QyFtotRhPlq2h2XTMub-0CQDkxdoPbBINoj3j-~2ZtZ6s2XC7tk3DBJ~TjE2Y5LI8q5Z3YERsbLdtoUsUYLK3T5MND1E9W0y7FzLcBBNaZC4xz7euQ0b-OSwrghnsRco5wMPklG5VFcFVKpWQ64KB4ErbFVXJs~5izL9k8kGDnROKl9abt2euJKd6RedF9~AjVniNQXebL7A__",
            }}
            style={styles.image}
          />
        </View>
        <View style={[styles.card, { backgroundColor: "#FFFBD8" }]}>
          <View>
            <Text style={styles.text}>Dhamaka</Text>
            <Text style={styles.text}>Offer</Text>
          </View>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/298d/3f99/2b49c57e3b3f114660bd6ae35754f4fb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P2HJG6E8kii~8U9RRttnPg3ZcSpLItAwK~FeCW6af7GIhk3SxbYLdGPXrgSW5~k1vnF-XiK5LGlDcQTGrN-~YF1w6UoSfq4axhjj7KT4bPN71LBg2Gt5dNvmC-k43xjc4LMSnkfVJeOGQHLcLvYqZKuEtj9NahGPPzvLMXHpogrbI4tyd7L-XR2albW1xVxxxz8bQydxx0VOcj6P98AOqrYLFXlvSp3qhRiil52eSpN-KJz9z8SybLWjINdWhR21fnj8jdDbzGGTuQh3c4FN1hLd2yGbrfLldyEfZjEcX9dj5WOuh3G0O~5VzdIfVetETJdUw4aaztKwC5d5ONY9lA__",
            }}
            style={styles.image}
          />
        </View>
      </View>
      <View style={styles.row}>
        <View style={[styles.card, { backgroundColor: "#FFF9C6" }]}>
          <View>
            <Text style={styles.text}>Popular</Text>
          </View>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__",
            }}
            style={styles.image2}
          />
        </View>
        <View style={[styles.card, { backgroundColor: "#E5D1FF" }]}>
          <Text style={styles.text}>Mobile</Text>
          <Image
            source={{
              uri: "https://s3-alpha-sig.figma.com/img/d403/6b87/f8c759aaf968092ea0240bd71c852718?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLAFxuJP~MWiyBg06y4DzS0i68IfHmkIZ1wWedWJBYcBeRQVjJDYswDDKz0libAY8q8L7xZchCZ4rCiryMayd83RXrUkLcY4~0DCmTAQi~g1uuPeXAfrdVSNd6z99OqIFuu6LccxJzk5SBLTvoS40cYqjhAcbDfk7zdxiuC~4tVI1DsQk9YOVlacE9tD-MqjgIqgRvmDTV56B8RuTuP3RP1AwemxaRktovKluS-iT-urMFS~1bZvTmgb2goVBN1eA7NT9VewQoHrvYwzraY2QGn7PACKyVVaEE83WK6Oj06iNDRoOS6wM127FQ73yu3lc7ICnkPDggi4AaQY4KjHRQ__",
            }}
            style={styles.image2}
          />
        </View>
      </View>
      {showCards && (
        <>
          <View style={styles.row}>
            <View style={[styles.card, { backgroundColor: "#FFF9C6" }]}>
              <View>
                <Text style={styles.text}>Winter</Text>
                <Text style={styles.text}>Offer</Text>
              </View>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__",
                }}
                style={styles.image2}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#E5D1FF" }]}>
              <Text style={styles.text}>Offer 2</Text>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d403/6b87/f8c759aaf968092ea0240bd71c852718?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLAFxuJP~MWiyBg06y4DzS0i68IfHmkIZ1wWedWJBYcBeRQVjJDYswDDKz0libAY8q8L7xZchCZ4rCiryMayd83RXrUkLcY4~0DCmTAQi~g1uuPeXAfrdVSNd6z99OqIFuu6LccxJzk5SBLTvoS40cYqjhAcbDfk7zdxiuC~4tVI1DsQk9YOVlacE9tD-MqjgIqgRvmDTV56B8RuTuP3RP1AwemxaRktovKluS-iT-urMFS~1bZvTmgb2goVBN1eA7NT9VewQoHrvYwzraY2QGn7PACKyVVaEE83WK6Oj06iNDRoOS6wM127FQ73yu3lc7ICnkPDggi4AaQY4KjHRQ__",
                }}
                style={styles.image2}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.card, { backgroundColor: "#C8F2FF" }]}>
              <View>
                <Text style={styles.text}>Winter</Text>
                <Text style={styles.text}>Offer</Text>
              </View>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/acc3/9b57/ce5e1e52ebeb61707d991fe82f6f0171?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fCg5dc~rci~RQEFuFHkgjTLuQIZUv6Cue8Boe-tGEQ91P9k12i2Cq306mu-FQDEJ7krVl12maco1dD3xMiyeQExDcBjQK8h4fv-WckuVRW4Y4j6-Az0T12w6vDOC~0uCsVdUczFbU1QyFtotRhPlq2h2XTMub-0CQDkxdoPbBINoj3j-~2ZtZ6s2XC7tk3DBJ~TjE2Y5LI8q5Z3YERsbLdtoUsUYLK3T5MND1E9W0y7FzLcBBNaZC4xz7euQ0b-OSwrghnsRco5wMPklG5VFcFVKpWQ64KB4ErbFVXJs~5izL9k8kGDnROKl9abt2euJKd6RedF9~AjVniNQXebL7A__",
                }}
                style={styles.image}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#FFFBD8" }]}>
              <Text style={styles.text}>Offer 2</Text>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/298d/3f99/2b49c57e3b3f114660bd6ae35754f4fb?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P2HJG6E8kii~8U9RRttnPg3ZcSpLItAwK~FeCW6af7GIhk3SxbYLdGPXrgSW5~k1vnF-XiK5LGlDcQTGrN-~YF1w6UoSfq4axhjj7KT4bPN71LBg2Gt5dNvmC-k43xjc4LMSnkfVJeOGQHLcLvYqZKuEtj9NahGPPzvLMXHpogrbI4tyd7L-XR2albW1xVxxxz8bQydxx0VOcj6P98AOqrYLFXlvSp3qhRiil52eSpN-KJz9z8SybLWjINdWhR21fnj8jdDbzGGTuQh3c4FN1hLd2yGbrfLldyEfZjEcX9dj5WOuh3G0O~5VzdIfVetETJdUw4aaztKwC5d5ONY9lA__",
                }}
                style={styles.image}
              />
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.card, { backgroundColor: "#FFF9C6" }]}>
              <View>
                <Text style={styles.text}>Winter</Text>
                <Text style={styles.text}>Offer</Text>
              </View>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/7239/466d/ad4849785eabfa9fb7ddcd368f7eb0a3?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bWkxYwuGdXJYm~adcU1n0xLziGzvMo2cI~eKShwqp5gkRjH9DMbkxyQSPzi~MymG0-zYw35lLvHxJ4po-PjggicXXfYw7yMyg-~emBFI36TpSyXMHRH0y9i3ZWGfI-AF6BmQe8HpqXYCwfK9x6o0jxUInz~7kkLc2gnJjbCX5PZaK0a7ye5TWYMTZMab1sRAwfnzR0FVlKnsZvxRnrRD2-zG-RLv1fxaUEqmDsHM0GfFzsZJYjMSwzx5vboXEuf~RcOJVaNxoPr~UQvt858w~lpRCplkRxsqGT9EM0EXv~jttWiY7p1J6FfMyOa7kx3HEEOM-OL8UrKJo~jOPQdqBQ__",
                }}
                style={styles.image2}
              />
            </View>
            <View style={[styles.card, { backgroundColor: "#E5D1FF" }]}>
              <Text style={styles.text}>Offer 2</Text>
              <Image
                source={{
                  uri: "https://s3-alpha-sig.figma.com/img/d403/6b87/f8c759aaf968092ea0240bd71c852718?Expires=1713139200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=hLAFxuJP~MWiyBg06y4DzS0i68IfHmkIZ1wWedWJBYcBeRQVjJDYswDDKz0libAY8q8L7xZchCZ4rCiryMayd83RXrUkLcY4~0DCmTAQi~g1uuPeXAfrdVSNd6z99OqIFuu6LccxJzk5SBLTvoS40cYqjhAcbDfk7zdxiuC~4tVI1DsQk9YOVlacE9tD-MqjgIqgRvmDTV56B8RuTuP3RP1AwemxaRktovKluS-iT-urMFS~1bZvTmgb2goVBN1eA7NT9VewQoHrvYwzraY2QGn7PACKyVVaEE83WK6Oj06iNDRoOS6wM127FQ73yu3lc7ICnkPDggi4AaQY4KjHRQ__",
                }}
                style={styles.image2}
              />
            </View>
          </View>
        </>
      )}
      <TouchableOpacity onPress={handleAllCategoriesPress}>
        <Text style={styles.allCategoriesText}>All Categories</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    width: "48%",
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,

    height: 90,
    overflow: "hidden", // Clip image overflow
    justifyContent: "space-between",
    flexDirection: "row",
    elevation: 4, // Add elevation for drop shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  allCategoriesText: {
    fontSize: 20,
    fontWeight: "700",
    textAlign: "center",
    color: Colors.light.orange,
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
    marginTop: 10,
    transform: [{ rotate: "-45deg" }],
  },
  image2: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 5,
    marginTop: 10,
  },
});

export default OfferSection;
