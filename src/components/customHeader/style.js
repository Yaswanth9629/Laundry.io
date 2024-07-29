import { StatusBar, StyleSheet } from "react-native";

const style =(width,height) =>StyleSheet.create({
   contaniner: {
    flexDirection:'row',
    alignItems:'center',
    marginTop: 10,
    backgroundColor:'#fff',
    height:70
  },
  menu: {
    width: 30,
    height: 20,
    padding:17,
    marginHorizontal:10
  },
  headertext: {
    color:'#000',
    fontSize:25,
    fontFamily:'Roboto-Bold',
    textAlign:'center',
    marginLeft:10
  }
}); 
export default style;