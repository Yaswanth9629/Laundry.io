import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { useDimensionContext } from "../../context";
import style from "./stayle";
import { useNavigation } from "@react-navigation/native";


const CustomDrawer = () => {
  const dimension = useDimensionContext
  const navigation = useNavigation()

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )
  
  return(
    <View style={responsiveStyle.mainView}>
    <View style={responsiveStyle.secondView}>
    <View style={responsiveStyle.profileView}>
      <Text style={{color:'#000000',fontSize:25}}>X</Text>
    </View>
      <View style={{padding:13,marginTop:15}}>
        <Text  style={{color:'#000000',fontSize:20,fontFamily:'Roboto-Bold'}}>Goku</Text>
        <Text style={{color:'#000000'}}>goku@gmail.com</Text>
      </View>
    </View>

      <View style={{marginVertical:30}}>

        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>navigation.navigate('Home')}>
          <Image source={require('../../assets/images/home.png')} style={responsiveStyle.icon}/>
          <Text style={responsiveStyle.drawerText}>Home</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
        </TouchableOpacity>
        
        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>navigation.navigate('Categories')}>
          <Image source={require('../../assets/images/category.png')} style={responsiveStyle.icon}/>
          <Text style={responsiveStyle.secDrawertext}>Shop by category</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>navigation.navigate('Orders')}>
          <Image source={require('../../assets/images/orders.png')} style={responsiveStyle.icon}/>  
          <Text style={responsiveStyle.therdDrawerText}>Orders</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>navigation.navigate('Wishlist')}>
          <Image source={require('../../assets/images/wishlist.png')} style={responsiveStyle.icon}/>  
          <Text style={responsiveStyle.fourthDrawertext}>Your Wishlist</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
        </TouchableOpacity>

        <TouchableOpacity style={{flexDirection:'row',justifyContent:'space-between'}} onPress={()=>navigation.navigate('Account')}>
          <Image source={require('../../assets/images/person.png')} style={responsiveStyle.icon}/>  
          <Text style={responsiveStyle.fifthDrawerText}>Your Account</Text>
          <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
        </TouchableOpacity>

      </View>

      <View>
        <View style={responsiveStyle.LogoutView}>
            <Image source={require('../../assets/images/arrow-right.png')} style={responsiveStyle.icon}/>
          <Text style={responsiveStyle.LoginText}>Logout</Text>
        </View>
      </View>

      <View style={responsiveStyle.contactView}>
        <Text style={responsiveStyle.contacText}>Contact</Text>
         <Text style={{marginLeft:10}}>
          If you have any questions, issues, or need support, please don't hesitate to reach out to us. You can contact our support team
         </Text>
         <TouchableOpacity style={responsiveStyle.ContactButton}>
          <Text style={responsiveStyle.buttonText}>Get Help</Text>
          <Image source={require('../../assets/images/arrow.png')} style={responsiveStyle.buttonIcon}/>
         </TouchableOpacity>
      </View>

    </View>  
  )
};
export default CustomDrawer;