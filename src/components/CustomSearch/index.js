import { Image, TextInput, View } from "react-native";
import { useDimensionContext } from "../../context"
import style from "./style";



const Customsearch = () => {
  const dimension = useDimensionContext();

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )

  return(
    <View style={responsiveStyle.container}>
      <View style={responsiveStyle.search}>
         <Image source={require('../../assets/images/searchone.png')} style={responsiveStyle.searchIcon}/>
         <TextInput 
          placeholder="Search here" 
          placeholderTextColor={'#000000'}
          style={responsiveStyle.searchTextinput} />
      </View>
    </View>
  )
}
export default Customsearch