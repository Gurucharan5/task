import React,{useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import {Picker} from '@react-native-community/picker';

const DropdownScreen = () => {
    const [selectedValue, setSelectedValue] = useState("java");
    return (
      <View style={styles.container}>
        <Picker
          selectedValue={selectedValue}
          style={{ height: 50, width: 150 }}
          onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
        >
          <Picker.Item label="Admin" value="java" />
          <Picker.Item label="Manager" value="js" />
        </Picker>
      </View>
    );
  }

export default DropdownScreen

const styles = StyleSheet.create({})
