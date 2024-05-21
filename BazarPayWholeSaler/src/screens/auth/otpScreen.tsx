import React, { useState, useRef, useContext } from "react";
import { View, Text, Animated, Vibration, TouchableOpacity } from "react-native";
import { OtpInput } from "react-native-otp-entry";
import { ScrollView } from "react-native-gesture-handler";
import { useNavigation, useRoute } from "@react-navigation/native";
import Colors from "../../constants/Colors";
import SignInButton from "../../components/main/auth/signinBtn/SignInBtn";
import { globalStyle } from "../../globalStyles/globalStyles";
import { Button } from "react-native-paper";

const tempUri =
	"https://img.freepik.com/free-vector/two-factor-authentication-concept-illustration_114360-5488.jpg?t=st=1716275739~exp=1716279339~hmac=b4b4f099e54c5339b627ea860a59e3864803651c9491dc05b6214e86009e46c7&w=740";

const languageTexts: any = {
	ENGLISH: {
		headerText: "Enter Verification Code",
		subheaderText: "We have sent you a Verification code to your phone number",
		verifyButton: "Verify"
	},
	BENGALI: {
		headerText: "আপনার যাচাইকরণ কোড লিখুন ",
		subheaderText: "আমরা আপনার ফোন নম্বরে একটি যাচাইকরণ কোড পাঠিয়েছি",
		verifyButton: "যাচাই করুন"
	}
};

const OtpPage = () => {
	const navigation:any = useNavigation();
	const route = useRoute();

	const [otp, setOtp] = useState("");
	const shakeAnimation = useRef(new Animated.Value(0)).current;
	const [focusColor, setFocusColor] = useState("green");



	const handleSubmit = () => {
		console.log("===>Otp", otp);
		navigation.navigate("passwordReset");
		// if (otp) {
		// 	console.log("=======>otp matched");
		// 	navigation.navigate("passwordReset");
		// } else {
		// 	shakeImage();
		// 	Vibration.vibrate(100);
		// }
	};

	console.log("Data from params:", route.params);

	const shakeImage = () => {
		Animated.sequence([
			Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
			Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(shakeAnimation, { toValue: -10, duration: 50, useNativeDriver: true }),
			Animated.timing(shakeAnimation, { toValue: 10, duration: 50, useNativeDriver: true }),
			Animated.timing(shakeAnimation, { toValue: 0, duration: 50, useNativeDriver: true })
		]).start();
		Vibration.vibrate(100);
	};

	return (
		<ScrollView style={{ flex: 1, backgroundColor: "white", paddingTop: 50 }}>
			<Animated.Image
				style={[ {height:400, width:400},{ transform: [{ translateX: shakeAnimation }] }]}
				source={{ uri: tempUri }}
			/>
			<View style={{ justifyContent: "center", alignItems: "center" }}>
				<Text style={{ fontWeight: "700", fontSize: 20, color: Colors.light.lightText, textAlign: "center" }}>
        আপনার যাচাইকরণ কোড লিখুন
				</Text>
				<Text style={{ fontWeight: "500", fontSize: 14, color: Colors.light.lightText, textAlign: "center", width: "60%" }}>
        আমরা আপনার ফোন নম্বরে একটি যাচাইকরণ কোড পাঠিয়েছি
				</Text>
			</View>
			<View style={{ paddingHorizontal: 50, marginTop: 20, gap: 20 }}>
				<OtpInput
					numberOfDigits={4}
					focusColor={focusColor}
					focusStickBlinkingDuration={400}
					onTextChange={text => {
						setFocusColor("green");
					}}
					onFilled={text => {
						setOtp(text);
						if (text ) {
							shakeImage();
							setFocusColor("red");
						}
					}}
					theme={{
						filledPinCodeContainerStyle: {
							borderColor: focusColor
						}
					}}
				/>
          <Button  style={globalStyle.signInButton} onPress={handleSubmit}>
         <Text style={globalStyle.signInButtonText}>Verify</Text> 

    </Button>
			</View>
		</ScrollView>
	);
};

export default OtpPage;