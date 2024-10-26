import {
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Image,
    View,
    Text,
    TouchableOpacity,
    TouchableNativeFeedback,
  } from 'react-native';
import Colors from '../../constants/Colors';


export 
const styles = StyleSheet.create({
    container: {
        paddingTop: 40,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    createBtnText:{

    },
    textInput:{

    },
    createBtn:{

    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)', // Dim background effect
      },
      searchBox: {
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: '#F0F0F0',
        flexDirection:"row",
        alignItems:"center",
        height:55,
        fontSize:20
      },
      modalInput: {
        borderBottomWidth: 1,
        borderColor: '#ccc',
        marginVertical: 10,
        padding: 10,
        fontSize: 16,
        color: '#1D2A32',
      },
      
      searchInput: {
        height: 55,
        fontSize: 16,
        color: '#1D2A32',
      },
      
      modalContent: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingHorizontal: 20,
        maxHeight: '50%',
        paddingBottom:20,
        paddingTop:25,
        minHeight:350
      },
      modalTitle: {
        fontSize: 25,
        fontWeight: '600',
        marginBottom: 10,
        color: Colors.light.blue
      },
      modalItem: {
        paddingVertical: 8,
        flexDirection:"row",
        alignItems: 'center',
        
      },
      modalItemText: {
        fontSize: 20,
      },
      unitField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        height: 55,
        backgroundColor: '#fff',
      },
      unitText: {
        color: '#6b7280',
        fontSize:16
      },
      // Add to your styles
imagePickerButton: {
  backgroundColor: '#ccc',
  padding: 10,
  borderRadius: 5,
  alignItems: 'center',
  marginVertical: 10,
},
imagePreview: {
  marginVertical: 10,
  alignItems: 'center',
},
selectedImage: {
  width: 100,
  height: 100,
  borderRadius: 10,
  resizeMode: 'contain',
},

      unitText2: {
        color: Colors.light.blue,
        fontSize:15,
        marginTop:4,
        fontWeight: '600',
      },
    title: {
        fontSize: 31,
        fontWeight: '700',
        color: Colors.light.blue,
        marginBottom: 6,
    },
    subtitle: {
        fontSize: 15,
        fontWeight: '500',
        color: '#929292',
    },
    /** Header */
    header: {
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        marginBottom: 24,
        paddingHorizontal: 24,
    },
    headerBack: {
        padding: 4,
        position: 'relative',
        backgroundColor:Colors.light.blue,
        borderRadius:555,
        alignItems:"center",
        justifyContent: 'center',
        marginBottom:8
    },
    /** Form */
    form: {
        marginBottom: 24,
        paddingHorizontal: 24,
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
    },
    formAction: {
        marginTop: 4,
        marginBottom: 16,
    },
    formFooter: {
        paddingVertical: 24,
        fontSize: 15,
        fontWeight: '600',
        color: '#222',
        textAlign: 'center',
        letterSpacing: 0.15,
    },
    /** Input */
    input: {
        marginBottom: 16,
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
        //   borderStyle: 'solid',
    },
    /** Button */
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderWidth: 1,
        backgroundColor: '#075eec',
        borderColor: '#075eec',
    },
    btnText: {
        fontSize: 18,
        lineHeight: 26,
        fontWeight: '600',
        color: '#fff',
    },
});
