import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import style from './style'
import { useDimensionContext } from '../../context'


const CustomHeader = props => {

  const {HeaderText} = props
  const dimension = useDimensionContext()
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

      <Text style={responsiveStyle.headertext}>{HeaderText}</Text>
    </View>
  )
}
export default CustomHeader;