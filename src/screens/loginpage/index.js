import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "../../components/customTextinput";
import style from "./style";
import CustomButton from "../../components/customButton";
import firestore from '@react-native-firebase/firestore';
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import { validateEmail } from "../SignupPage/cont";
import Snackbar from 'react-native-snackbar';



const LoginPage = () => {
  const dimension = useDimensionContext
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const navigation = useNavigation()

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )
  
  const Description = [
    "We're thrilled to see you again! At Laundry.io, we aim to make your laundry experience as seamless and stress-free as possible. Whether you're a returning customer or a valued new user, we want to remind you of the exceptional services and features we offer"
  ]

  const HandleButton = async() => {
    if (
      email.trim() !== '' &&
      password.trim() !== ''
    ){
      if(validateEmail(email.trim())){
        await firestore()
        .collection('Users')
        .where('email', '==', email.trim())
        .get()
        .then(async snapshot => {
          if(snapshot.empty){
            Snackbar.show({
              text: 'No account found',
              duration: Snackbar.LENGTH_LONG,
              backgroundColor: '#F70808',
            });
          }else{
            snapshot.forEach(documentSnapshot => {
              const respData = documentSnapshot.data();
              if(password === respData.password) {
                Snackbar.show({
                  text: 'Login successful',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: '#00ff00',
                  textColor: 'white',
                });
                navigation.navigate('Home')
              }else{
                Snackbar.show({
                  text: 'Password is incorrect',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: '#F70808',
                });
              }
            })
          }
        }).catch(err => {
          console.warn(err);
        })
      }else{
        Snackbar.show({
          text: 'Invalid email',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#F70808',
        });
      }
    }else{
      Snackbar.show({
        text: 'fields are empty',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#F70808',
    })
  }
  }
  const Handlepress =()=> {
    navigation.navigate('SignupPage')
  }

  return(
    <View style={{backgroundColor:'#fff',height:800,flex:1}}>
      
       <View style={responsiveStyle.icon}>
         <Text style={responsiveStyle.iconText}>Laundry.io</Text>
       </View>
      
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

        <View style={{marginTop:-350}}>
      <Text style={responsiveStyle.welcome}>Welcome Back!</Text>
      <Text style={responsiveStyle.Description}>{Description}</Text>

      <CustomTextInput type = "email"
      placeholder="Phone number/Email"
      handleText={text => setemail(text)}/>

      <CustomTextInput type = "password"
      placeholder="Password"
      handleText={text => setpassword(text)}/>
      </View>

      <Text style={responsiveStyle.forgotText}>Forgot Password?</Text>

      <CustomButton ButtonName="Login"
       HandleButton={HandleButton}/>

      
     <Text style={responsiveStyle.Noaccount}>Need an account?</Text>

     <TouchableOpacity style={responsiveStyle.signUpbutton}
       onPress={Handlepress}>
      <Text style={responsiveStyle.signupText}>Signup</Text>
     </TouchableOpacity>
      
    </View>
  )
}
export default LoginPage;