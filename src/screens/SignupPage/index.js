import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import CustomTextInput from "../../components/customTextinput";
import style from "./style";
import CustomButton from "../../components/customButton";
import { useDimensionContext } from "../../context";
import { useNavigation } from "@react-navigation/native";
import firestore from '@react-native-firebase/firestore';
import { validateEmail, validatePhone } from "./cont";
import { validatePhoneNumber } from "../../components/common/validation";
import Snackbar from "react-native-snackbar";




const SignupPage = () => {
  const dimension = useDimensionContext
  const [email, setemail] = useState('');
  const [name, setname] = useState('');
  const [phone, setphone] = useState('');
  const [password, setpassword] = useState('');
  const [cpassword, setcpassword] = useState('');
  const [error, seterror] = useState('');
  const navigation = useNavigation()

  const responsiveStyle = style(
    dimension.windowWidth, 
    dimension.windowHeight
  )
  
  const Description = [
    'Welcome to Laundry.io, where we transform your laundry routine into a hassle-free experience. Sign up now to enjoy a range of convenient and premium laundry services designed to fit seamlessly into your lifestyle.'
  ]
  
  const HandleButton = async() => {
    if (
      name.trim() !=='' && 
      phone.trim() !=='' &&
      email.trim() !=='' &&
      password.trim() !=='' &&
      cpassword.trim() !==''
    ){
      if(validateEmail(email.trim())){
        if(validatePhone(phone.trim())){
          if(password.trim() === cpassword.trim()){
            await firestore()
            .collection('Users')
            .where('name', '==', name.trim())
            .where('email', '==', email.trim())
            .get()
            .then(async snapshot => {
              if(snapshot.empty) {
                if(validateEmail(email.trim())){
                  if(validatePhoneNumber(phone.trim())){
                    const userData = {
                      name: name.trim(),
                      phone: phone.trim(),
                      email: email.trim(),
                      password: password.trim(),
                      created: String(new Date()), // Added timestamps
                        updated: String(new Date()), // Added timestamps
                        isAdmin: false,
                        active: 1
                    }
                    await firestore()
                    .collection('Users')
                    .add(userData)
                    .then(resp => {
                      Snackbar.show({
                        text: 'A new account is created for you.',
                        duration: Snackbar.LENGTH_LONG,
                        backgroundColor:'#32cd32',
                      });
                      navigation.navigate('Home')
                    })
                    .catch(err => {
                      console.warn(err);
                      seterror('Faild to create account')
                    })
                  }else{
                    seterror('invalid phone number')
                  }
                }else{
                  seterror('Invalid email')
                }
              }else{
                Snackbar.show({
                  text: 'Account already exists with this email.',
                  duration: Snackbar.LENGTH_LONG,
                  backgroundColor: '#F70808',
                });
              }
            })
          }else{seterror('Password is incorrect')}
        }else{seterror('type correct number')}
      }else{seterror('incorrect email')}
   }else{
    seterror('fiealds are empty')
   }
 }

  return(
    <ScrollView style={{backgroundColor:'#fff',height:800,flex:1}}>
      
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
      <Text style={responsiveStyle.welcome}>Signup...</Text>
      <Text style={responsiveStyle.Description}>{Description}</Text>

      <CustomTextInput type = "name"
      placeholder="Name"
      handleText={text => setname(text)}/>

      <CustomTextInput type = "Phone"
      placeholder="Phone number"
      handleText={text => setphone(text)}/>

      <CustomTextInput type = "emai"
      placeholder="Email"
      handleText={text => setemail(text)}/>

      <CustomTextInput type = "password"
      placeholder="Password"
      handleText={text => setpassword(text)}/>

      <CustomTextInput type = "password"
      placeholder="Confirm password"
      handleText={text => setcpassword(text)}/>
      </View>

      <CustomButton ButtonName="Signup"
        HandleButton={HandleButton}/>

      
     <Text style={responsiveStyle.Noaccount}>Already have an account?</Text>

     <TouchableOpacity style={responsiveStyle.signUpbutton}>
      <Text style={responsiveStyle.signupText}>Login</Text>
     </TouchableOpacity>
      
    </ScrollView>
  )

}
export default SignupPage;