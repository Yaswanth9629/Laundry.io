import { StatusBar, StyleSheet } from "react-native";

const style =(width,height) =>StyleSheet.create({
   contaniner: {
    flexDirection:'row',
    alignItems:'center',
    marginTop: 10,
    backgroundColor:'#fff',
    height:70
  },
  logo: {
    width:50,
    height:40,
    padding:50,
    marginHorizontal:1,
    margin:10
  },
  menu: {
    width: 30,
    height: 20,
    padding:17,
    marginHorizontal:10
  }
}); 
export default style;