import { StyleSheet } from "react-native";


const style = (width,height) => StyleSheet.create({
  icon: {
    marginTop:30,
    margin:15,
    width:133,
    height:50,
    backgroundColor:'#2BC957',
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
  },
  iconText: {
    marginTop:-2,
    fontSize:22,
    color:'#fff',
    fontWeight:'400',
  },
  welcome: {
    fontSize:38,
    margin:15,
    marginTop:15,
    fontWeight:'400',
    fontFamily:'Montserrat-Medium',
    color:'#000'
  },
  Description: {
    margin:15,
    marginTop:1,
    fontSize: 15,
    color:'#6A6E6B',
    marginBottom:25
    
  },
  design: {
    backgroundColor:'#C9F7D6',
    width:80,
    height:350,
    marginLeft:340,
    borderRadius:15
  },
  design1 : {
    backgroundColor:'#C9F7D6',
    width:100,
    height:100,
    marginTop:-40,
    borderRadius:20,
    marginLeft:-28
  },
  design2: {
    backgroundColor:'#C9F7D6',
    width:150,
    height:120,
    marginLeft:-35,
    borderRadius:30
  },
  design3 : {
    backgroundColor:'#C9F7D6',
    width:150,
    height:200,
    marginTop:-150,
    borderRadius:90,
    marginLeft:-35
  },
  design4 : {
    backgroundColor:'#C9F7D6',
    width:140,
    height:140,
    marginTop:-215,
    borderRadius:200,
    marginLeft:-40
  },
  design5 : {
    backgroundColor:'#fff',
    width:100,
    height:100,
    marginTop:-200,
    borderRadius:50,
    marginLeft:60
  },
  design6 : {
    backgroundColor:'#fff',
    width:170,
    height:170,
    marginTop:155,
    borderRadius:100,
    marginLeft:-120
  },
  design7 : {
    backgroundColor:'#C9F7D6',
    width:100,
    height:100,
    marginTop:-30,
    borderRadius:100,
    marginLeft:5
  },
  forgotText: {
    color:'#000',
    fontSize:15,
    textAlign:'right',
    marginRight:30,
    marginTop:25
  },
  Noaccount: {
    fontSize:15,
    textAlign:'center',
    marginTop:50,
    color:'#000'
  },
  signUpbutton: {
    width:420,
    height:60,
    backgroundColor:'#2BC957',
    marginTop:102,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center'
  },
  signupText: {
    color:'#fff',
    fontSize:22,
    fontWeight:'500'
  }
})
export default style;