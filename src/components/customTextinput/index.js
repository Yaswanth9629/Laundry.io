import React, {useState} from 'react';
import {
  Image,
  TextInput,
  View,
  TouchableOpacity,
  Text,
  Platform,
} from 'react-native';
import style from './style';
const CustomTextInput = props => {
  const {
    type,
    handleText,
    placeholder,
    value,
    check = false,
    multiline = false,
  } = props;


  const [show, setShow] = useState(false);
  const keyboardType =
    type === 'email'
      ? 'email-address'
      : type === 'password'
      ? 'default'
      : type === 'phone'
      ? 'phone-pad'
      : 'default';
  const SecureTextEntry = type === 'password' ? (show ? false : true) : false;
  const icon = type === 'email' ? require('../../assets/images/email.png'):
    type === 'password' ? show ? require('../../assets/images/eye.png'):
    require('../../assets/images/closedeye.png'):type === 'name'? require('../../assets/images/user.png'):false
 
  const handlePassword = () => {
    setShow(!show);
  };
  return (
    <View style={style.container}>
      <TextInput
        style={[
          style.textInput,
        ]}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={SecureTextEntry}
        selectionColor={'green'}
        placeholderTextColor={'gray'}
        onChangeText={handleText}
        value={value}
        multiline={multiline}
      />
      {check ? <Text style={style.checkText}>Check</Text> : null}
      
        <TouchableOpacity
          onPress={handlePassword}
          disabled={type !== 'password' ? true : false}>
          {<Image source={icon} style={style.icon}/> }
        </TouchableOpacity>
     
    </View>
  );
};
export default CustomTextInput;
