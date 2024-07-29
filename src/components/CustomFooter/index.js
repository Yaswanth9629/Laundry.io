import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { useDimensionContext } from "../../context";
import style from "./style";

const CustomFooter = ({ state, descriptors, navigation }) => {
  const dimension = useDimensionContext

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )

  return (
    <View
      style={responsiveStyle.footerMenu}
    >
      {state.routes.map((route, index) => {
        const icon =
          route.name === "Home"
            ? require("../../assets/images/home.png")
            : route.name === "Cart"
            ? require("../../assets/images/Cart.png")
            : route.name === "Search"
            ? require("../../assets/images/search.png")
            : route.name === "Categories"
            ? require("../../assets/images/category.png")
            : route.name === "Offers"
            ? require("../../assets/images/offers.png")
            : false;
        return (
          <TouchableOpacity style={responsiveStyle.footerButton} key={index}
            onPress={()=>navigation.navigate(route.name)}>
            {icon && <Image source={icon} style={responsiveStyle.FooterIcon} />}
            <Text style={responsiveStyle.footerText}>{route.name}</Text>
          </TouchableOpacity>
          
        );
      })}
    </View>
  );
};

export default CustomFooter;
