import { StyleSheet } from "react-native";

const style =(width,height)=> StyleSheet.create({
   mainView: {
    padding:15,
    marginVertical:20,
    height:130,
    backgroundColor:'#59cda3',
    marginTop:-10
  },
  secondView: {
    flexDirection:'row',
  },
  profileView: {
    marginTop:20,
    width:75,
    height:75,
    borderRadius:75/2,
    backgroundColor:'#fff',
    justifyContent:'center',
    alignItems:'center'
  },
  profileText: {
    color:'#000000',
    fontSize:25
  },
  icon: {
    width:25,
    height:25,
    resizeMode:'contain'
  },
  drawerText: {
    color:'#000000',
    fontSize:17,
    fontFamily:'Roboto-Bold',
    paddingBottom:15,
    marginRight:110,
    marginLeft:-30,
    marginBottom:4
  },
  secDrawertext: {
    color:'#000000',
    fontSize:17,
    fontFamily:'Roboto-Bold',
    paddingBottom:15,
    marginRight:60,
    marginLeft:7,
    marginBottom:4
  },
  therdDrawerText: {
    color:'#000000',
    fontSize:17,
    fontFamily:'Roboto-Bold',
    paddingBottom:15,
    marginRight:135,
    marginBottom:4
  },
  fourthDrawertext: {
    color:'#000000',
    fontSize:17,
    fontFamily:'Roboto-Bold',
    paddingBottom:15,
    marginRight:90,
    marginBottom:4
  },
  fifthDrawerText: {
   color:'#000000',
   fontSize:17,
   fontFamily:'Roboto-Bold',
   paddingBottom:15,
   marginRight:90
  },
  LogoutView: {
   borderColor:'#000000',
   borderWidth:1.5,
   borderRadius:20,
   width:150,
   height:50,
   padding:1,
   width:116,
   height:55,
   alignItems:'center',
   justifyContent:'center',
   backgroundColor:'#f8f8ff',
   flexDirection:'row'
  },
  LoginText: {
   color:'#000000',
   fontSize:17,
   fontFamily:'Roboto-Medium',
   paddingBottom:15,
   marginTop:12,
   marginLeft:4
  },
  contactView: {
    backgroundColor:'#59cda3',
    marginTop:30,
    width:260,
    height: 190,
    borderRadius:30,
    marginLeft:-5,
  },
  contacText: {
    marginTop:10,
    marginLeft:10,
    fontFamily:'Roboto-Bold',
    fontSize:20
  },
  ContactButton: {
    width:200,
    height:50,
    backgroundColor:'#20b2aa',
    marginTop:7,
    marginLeft:20,
    justifyContent:'center',
    borderRadius:15,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  buttonText: {
    fontSize:15,
    fontFamily:'Roboto-Bold',
    marginLeft:10,
    borderRadius:10
  },
  buttonIcon: {
    width:30,
    height:30,
    marginRight:20
  }
});
export default style;