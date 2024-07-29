import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import style from "./style";


const CustomButton = props => {

  const {ButtonName, HandleButton} = props

  return(
   <View style={style.contain}>
    <TouchableOpacity style={style.button}
      onPress={HandleButton}>
      <Text style={style.ButtonText}>{ButtonName}</Text>
    </TouchableOpacity>
    </View>
  )
}
export default CustomButton;