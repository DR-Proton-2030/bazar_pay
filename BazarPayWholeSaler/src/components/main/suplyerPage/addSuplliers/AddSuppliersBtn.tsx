import * as React from 'react';
import { StyleSheet } from 'react-native';
import { FAB } from 'react-native-paper';

const FabBtn = () => (
  <FAB
    icon="plus"
    color='white'
    style={styles.fab}
    label={'Add Suppliers'}

    onPress={() => console.log('Pressed')}
  ></FAB>
);

const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    margin: 16,
    right: 0,
    bottom: 30,
    color:"white",
    backgroundColor:"#4d94ff"
  },
})

export default FabBtn;