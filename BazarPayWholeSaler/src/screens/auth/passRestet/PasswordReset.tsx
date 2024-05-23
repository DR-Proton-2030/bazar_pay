import React, { useRef, useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Animated, Vibration, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import pass from "../../../../assets/images/pass.png"
import { globalStyle } from '../../../globalStyles/globalStyles';
import { Button } from 'react-native-paper';
import Colors from '../../../constants/Colors';
import { useNavigation } from 'expo-router';
const tempUri = pass

const PasswordResetPage = () => {
  const navigation:any = useNavigation();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

  const passwordsMatch = password === confirmPassword && password !== '';

  const handleSubmit = () => {
      // Handle password reset logic here
      console.log('Password reset successfully');
      navigation.navigate("homePage");
  };
  const shakeAnimation = useRef(new Animated.Value(0)).current;
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
    <ScrollView style={styles.container}>
           <Animated.Image
				style={[ {height:400, width:"100%"},{ transform: [{ translateX: shakeAnimation }] }]}
				source={pass}
			/>
            <View style={{ justifyContent: "center", alignItems: "center",gap:10 ,marginBottom:20}}>
         <Text style={{ fontWeight: "700", fontSize: 20, color: Colors.light.text, textAlign: "center" }}>
         অ্যাকাউন্ট পাসওয়ার্ড সেট করুন
				</Text>
            <Text style={{ fontWeight: "500", fontSize: 14, color: Colors.light.lightText, textAlign: "center", width: "60%" }}>
            আপনার অ্যাকাউন্টের জন্য একটি শক্তিশালী পাসওয়ার্ড সেট করুন
				</Text>
                </View>
      <View style={styles.inputContainer}>
   
        <TextInput
          style={styles.input}
          placeholder="Enter password"
          secureTextEntry={!passwordVisible}
          value={password}
          onChangeText={setPassword}
        />
        <TouchableOpacity onPress={() => setPasswordVisible(!passwordVisible)} style={styles.eyeIcon}>
          <Ionicons name={passwordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Confirm password"
          secureTextEntry={!confirmPasswordVisible}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
        />
        <TouchableOpacity onPress={() => setConfirmPasswordVisible(!confirmPasswordVisible)} style={styles.eyeIcon}>
          <Ionicons name={confirmPasswordVisible ? 'eye-off' : 'eye'} size={20} color="gray" />
        </TouchableOpacity>
      </View>

      {!passwordsMatch && confirmPassword !== '' && (
        <Text style={styles.errorText}>Passwords do not match</Text>
      )}

       <Button textColor='white' style={globalStyle.signInButton} onPress={handleSubmit}
       >
         Save
    </Button>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor:"white"
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderRadius: 25,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
    marginHorizontal:5,
    borderColor:Colors.light.lightText,
    borderWidth:0.7
  },
  input: {
    flex: 1,
    padding: 14,
    paddingLeft: 15,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
    fontSize: 16,
  },
  eyeIcon: {
    padding: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 12,
    textAlign: 'center',
  },
  buttonContainer: {
    marginTop: 20,
    borderRadius: 25,
    overflow: 'hidden',
  },
});

export default PasswordResetPage;
