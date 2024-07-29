import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    marginTop:40,
    height:400,
    width:400,
    justifyContent: 'flex-end',
    alignItems: 'center',
    flex:1
  },
  map: {
    ...StyleSheet.absoluteFillObject,
    height: 720
  },
  container1: {
    position:'absolute',
    top: 0,
    width: '100%',
    zIndex: 1,
  },
  listView: { 
    backgroundColor: 'black' 
  },

  header: {
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    elevation: 2, 
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  backButton: {
    marginRight: 10,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft:100
  },
  doneButton: {
    position: 'absolute',
    bottom: -370,
    left: 50,
    right: 50,
    backgroundColor: 'green',
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  doneButtonText: {
    color: 'white',
    fontSize: 16,
  },
 });
 export default styles