import React, { useEffect, useState } from "react";
import { FlatList, Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import firestore from '@react-native-firebase/firestore';
import Snackbar from 'react-native-snackbar';
import { useDimensionContext } from "../../components";
import style from "./style";

const Edit = () => {
  const [text, setText] = useState('');
  const [addressList, setAddressList] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const dimension = useDimensionContext;

  const responsiveStyle = style(dimension.windowWidth, dimension.windowHeight);
  
  useEffect(() => {
    fetchAddress();
  }, []);

  const fetchAddress = async () => {
    try {
      const snapshot = await firestore().collection('Address').get();
      const addresses = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setAddressList(addresses);
    } catch (error) {
      console.error('Error fetching addresses: ', error);
      Snackbar.show({
        text: 'Error fetching addresses.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#F70808',
      });
    }
  }

  const handleAddOrUpdateAddress = async () => {
    if (text.trim() !== '') {
      const addressData = { text: text.trim() };
      try {
        if (editingId) {
          await firestore().collection('Address').doc(editingId).update(addressData);
          Snackbar.show({
            text: 'Address updated successfully.',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#32cd32',
          });
        } else {
          await firestore().collection('Address').add(addressData);
          Snackbar.show({
            text: 'Address added successfully.',
            duration: Snackbar.LENGTH_LONG,
            backgroundColor: '#32cd32',
          });
        }
        setText('');
        setEditingId(null);
        fetchAddress();
      } catch (error) {
        console.error('Error adding/updating address: ', error);
        Snackbar.show({
          text: 'Error adding/updating address.',
          duration: Snackbar.LENGTH_LONG,
          backgroundColor: '#F70808',
        });
      }
    } else {
      Snackbar.show({
        text: 'Please fill in the address.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#F70808',
      });
    }
  }

  const handleEdit = (address) => {
    setText(address.text);
    setEditingId(address.id);
  }

  const handleDelete = async (id) => {
    try {
      await firestore().collection('Address').doc(id).delete();
      Snackbar.show({
        text: 'Address deleted successfully.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#32cd32',
      });
      fetchAddress();
    } catch (error) {
      console.error('Error deleting address: ', error);
      Snackbar.show({
        text: 'Error deleting address.',
        duration: Snackbar.LENGTH_LONG,
        backgroundColor: '#F70808',
      });
    }
  }

  const renderItem = ({ item }) => (
    <View style={responsiveStyle.itemContainer}>
      <Text style={responsiveStyle.listText}>{item.text}</Text>
      <View style={responsiveStyle.buttonContainer}>
        <TouchableOpacity
          style={responsiveStyle.button1}
          onPress={() => handleEdit(item)}
        >
          <Text style={responsiveStyle.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[responsiveStyle.button1, responsiveStyle.deleteButton]}
          onPress={() => handleDelete(item.id)}
        >
          <Text style={responsiveStyle.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
  const GotoGps =()=>{
    navigation.navigate('Setlocation')
  }
  return (
    <View style={{ backgroundColor: '#fff', height: 800, flex: 1 }}>
      <Text style={responsiveStyle.update}>Add your location</Text>
      
      <View style={responsiveStyle.design}>
        <View style={responsiveStyle.design1}>
          <View style={responsiveStyle.design2}></View>
          <View style={responsiveStyle.design3}></View>
          <View style={responsiveStyle.design4}></View>
          <View style={responsiveStyle.design5}></View>
          <View style={responsiveStyle.design6}></View>
          <View style={responsiveStyle.design7}></View>
        </View>
      </View>
      
      <TextInput
        style={responsiveStyle.Textinput}
        placeholder="Address"
        placeholderTextColor={'#908E99'}
        multiline
        numberOfLines={8}
        textAlignVertical="top"
        onChangeText={setText}
        value={text}
      />

      <TouchableOpacity
        style={responsiveStyle.button}
        onPress={handleAddOrUpdateAddress}
      >
        <Text style={responsiveStyle.buttonText}>{editingId ? "Update Address" : "Add Address"}</Text>
      </TouchableOpacity>

      <FlatList
        data={addressList}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={responsiveStyle.listContainer}
      />

         <View style={{flexDirection:'row',justifyContent:'flex-end',alignContent:'center',margin:12,marginTop:30}}>
        <Image source={require('../../assets/images/gps.png')} style={responsiveStyle.gpsIcon}/>
        <Text style={responsiveStyle.gpsText}
        onPress={GotoGps}>
          Add your location
        </Text>
        </View>

    </View>
  );
}

export default Edit;
