import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import { useDimensionContext } from "../../context";




const CommonHeader = () => {
  const dimension = useDimensionContext
  const navigation = useNavigation()

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )

  return(
    <View style={responsiveStyle.contaniner}>
      <TouchableOpacity onPress={()=> navigation.toggleDrawer()}>
          <Image style={responsiveStyle.menu}source={require('../../assets/images/menu.png')}/>
      </TouchableOpacity>

      <Image style={responsiveStyle.logo}source={require('../../assets/images/skyshiplogo.png')} />
    </View>
  )
}
export default CommonHeader;