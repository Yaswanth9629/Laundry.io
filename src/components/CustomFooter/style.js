import { StyleSheet } from "react-native";


const style =(width,height)=> StyleSheet.create({
 footerMenu:{
  height: 70,
  backgroundColor: "#59cda3",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-around",
 },
 footerButton: { 
  justifyContent: "center",
  alignItems: "center" 
 },
 FooterIcon: { width: 30, 
  height: 30, 
  resizeMode: "contain" 
 },
 footerText: { 
  color: "#fff"
 }
})
export default style;