import {StyleSheet, Dimensions, Platform} from 'react-native';

const {width,height } = Dimensions.get('screen');

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    backgroundColor: '#DCE3DE', 
    padding: width * 0.01,
    marginVertical: 12,
    width:width*0.90,
    marginLeft:14
  },
  textInput: {
    color: 'black',
    fontSize: 14,
    flex: 1
  },
  icon: {
    width: width * 0.05,
    height: height * 0.05,
    resizeMode: 'contain'
  }

});
export default style;
