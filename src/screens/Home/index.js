import React, { useState } from "react";
import { Button, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { useDimensionContext } from "../../components";
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import style from "./style";
import { useNavigation } from "@react-navigation/native";
import CheckBox from 'react-native-check-box'



const Home = () => {
  const dimension = useDimensionContext
  const [text, settext] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const navigation = useNavigation()


  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )
  const Desc = [
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt  ut labore et dolore magna aliqua'
    ]

    const Handlepress = async() => {
      if(text !== ''){
        try {
          await firestore()
          .collection('Address')
          .add({text})
          .then(
            Snackbar.show({
              text: 'Address added successfully',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor:'#32cd32',
            })
          )
          navigation.navigate('Edit')
        } catch (error) {
          console.error('Error adding document: ', error);
        Snackbar.show({
        text: 'Error adding address.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#F70808',
      });
        }
      }else{
        Snackbar.show({
          text: 'Please enter an address.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: 'red',
        });
      }
      
    }

    const GotoGps =()=>{
      navigation.navigate('Setlocation')
    }

  return(
    <View style={{backgroundColor:'#fff',height:800,flex:1}}>

      <Text style={responsiveStyle.update}>Update your resident 
        and continue</Text>
      
          <View style={responsiveStyle.design}>
          <View style={responsiveStyle.design1}>
            <View style={responsiveStyle.design2}></View>
            <View style={responsiveStyle.design3}></View>
            <View style={responsiveStyle.design4}></View>
            <View style={responsiveStyle.design5}></View>
            <View style={responsiveStyle.design6}></View>
            <View style={responsiveStyle.design7}></View>
          </View>
        </View>

        <Text style={responsiveStyle.Description}>{Desc}</Text>

        <TextInput style={responsiveStyle.Textinput}
        placeholder="Address"
        placeholderTextColor={'#908E99'}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        onChangeText={settext}
        value={text}/>
         
       <View style={{alignItems:'center'}}> 
        <TouchableOpacity style={responsiveStyle.icon}
          onPress={Handlepress}>
          <Text style={responsiveStyle.iconText}>Confirm</Text>
        </TouchableOpacity>

       </View>
       
       <View style={{flexDirection:'row',justifyContent:'flex-end',alignContent:'center',margin:12,marginTop:30}}>
        <Image source={require('../../assets/images/gps.png')} style={responsiveStyle.gpsIcon}/>
        <Text style={responsiveStyle.gpsText}
        onPress={GotoGps}>
          Add your location
        </Text>
        </View>

        <CheckBox
        style={{flex: 1, padding: 10,}}
        isChecked={isChecked}
        onClick={() => setIsChecked(!isChecked)}
        rightText={"I agree to the Terms and Conditions"}
        rightTextStyle={style.rightText}
      />       

    </View>
  )
}
export default Home;