import { StyleSheet } from "react-native";


const style =(width,height) => StyleSheet.create({
  container: {
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
    marginVertical:15
  },
  search: {
    borderWidth:2,
    backgroundColor:'#008080',
    borderColor:'#59cda3',
    flexDirection:'row',
    alignItems:'center',
    borderRadius:20,
    padding:15,
    width:340,
    height:40,
    alignSelf:'center',
    flexDirection:'row',
    alignItems:'center'
  },
  searchIcon: {
    width:30,
    height:30,
    marginLeft:-10
  },
  searchTextinput: {
    marginleft: -20,
    width:300,
    height:39,
    borderRadius:20
  }
})
export default style