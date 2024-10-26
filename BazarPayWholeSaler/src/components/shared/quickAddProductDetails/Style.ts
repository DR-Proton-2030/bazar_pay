import { View, StyleSheet, ScrollView, Image, Text, Alert } from "react-native";
import Colors from "../../../constants/Colors";

export const styles = StyleSheet.create({
  content: {
    paddingBottom: 120,
  },
  container: {
    backgroundColor: "#fff",
    // padding: 10,
    alignItems: "center",
  },
  logo: {
    height: 200,
    width: 200,
    borderRadius:40
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    overflow: 'hidden', // Hides overflow when limited height
  },
  readMoreText: {
    color: 'blue',
    marginTop: 5,
  },
  inputContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  inputWrapper: {
    width: "48%", // Adjust width as needed to fit two inputs per row
    marginBottom: 20,
  },
  inputWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
   
  },
  input:{
 marginBottom: 8,
 width:"48%"
  },
  inputLabel: {
    fontSize: 17,
    fontWeight: '600',
    color: '#222',
    marginBottom: 8,
},
  inputControl: {
    height: 55,
    backgroundColor: '#fff',
    paddingHorizontal: 16,
    borderRadius: 12,
    fontSize: 15,
    fontWeight: '500',
    color: '#222',
    borderWidth: 1,
    borderColor: '#C9D3DB',
    marginBottom:5
    //   borderStyle: 'solid',
},
  button: {
    marginTop: 20,
    width: "100%",
  },
  hero: {
    width: '80%',
    height: 200,
    marginTop:10
  },
  title: {
    fontSize: 27,
    fontWeight: '700',
    color: '#1d1d1d',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    lineHeight: 20,
    color: '#494949',
  },
  overlay: {
   
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  /** Header */
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    paddingTop:40
  },
  headerAction: {
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9999,
    marginHorizontal: 12,
  },
  /** Section */
  section: {
    backgroundColor: '#fff',
    paddingVertical: 12,
    paddingHorizontal: 16,
    // borderTopWidth: 1,
    // borderBottomWidth: 1,
    borderColor: '#e7e7e7',
    marginBottom: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '700',
    color:Colors.light.blue,
    marginBottom: 4,
  },
  sectionSubtitle: {
    fontSize: 13,
    color: '#6d6d6d',
  },
  sectionBadge: {
    backgroundColor:Colors.light.grayBg ,
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionBadgeText: {
    fontSize: 13,
    fontWeight: '600',
    color: Colors.light.blue,
  },
  sectionOptions: {
    paddingTop: 20,
    minHeight:300
  },
  /** Radio */
  radio: {
    position: 'relative',
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    // borderTopWidth: 1,
    borderColor: '#e7e7e7',
  },
  radioInput: {
    width: 18,
    height: 18,
    borderRadius: 9999,
    // borderWidth: 2,
    borderColor: '#1d1d1d',
    marginRight: 12,
  },
  radioInputActive: {
    // borderWidth: 5,
    borderColor: '#1d1d1d',
  },
  radioLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#2d2d3a',
  },
  radioPrice: {
    fontSize: 14,
    fontWeight: '500',
    color: '#6d6d6d',
    marginLeft: 'auto',
  },
  /** Button */
  btn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderWidth: 1,
    backgroundColor: Colors.light.blue,
    borderColor:  Colors.light.blue
  },
  btnText: {
    fontSize: 16,
    lineHeight: 26,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 0.45,
  },
});
