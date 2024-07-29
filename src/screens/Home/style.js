import { StyleSheet } from "react-native";


const style = (width,height) => StyleSheet.create({
  icon: {
    marginTop:30,
    margin:15,
    width:133,
    height:50,
    backgroundColor:'#C9F7D6',
    borderRadius:7,
    justifyContent:'center',
    alignItems:'center',
  },
  iconText: {
    marginTop:-2,
    fontSize:18,
    color:'#2BC957',
    fontWeight:'400',
  },
  update: {
    fontSize:38,
    margin:15,
    marginTop:15,
    fontWeight:'400',
    fontFamily:'Montserrat-Medium',
    color:'#000'
  },
  Description: {
    margin:15,
    marginTop:-380,
    fontSize: 15,
    color:'#6A6E6B',
    marginBottom:25
    
  },
  design: {
    backgroundColor:'#C9F7D6',
    width:80,
    height:350,
    marginLeft:340,
    borderRadius:15,
    marginTop:40
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
  Textinput: {
    width:350,
    height:300,
    backgroundColor:'#DCE3DE',
    marginTop:-10,
    marginLeft:25
  },
  button: {
    width:300,
    height:60,
    backgroundColor: '#32cd32',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 10,
    marginLeft:50,
    marginTop:10,
    justifyContent:'center'
  },
  cancelButton: {
    backgroundColor: 'red',
  },
  deleteButton: {
    backgroundColor: 'red',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
  listContainer: {
    padding: 10,
  },
  listItem: {
    backgroundColor: '#f9f9f9',
    padding: 20,
    marginVertical: 5,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  gpsText: {
    fontSize:20,
    color:'#2BC957',
    fontWeight:'400',
  },
  gpsIcon: {
    width:30,
    height:30,
    resizeMode:'contain',
  },
  rightText: {
    color: 'black'
  }
})
export default style;