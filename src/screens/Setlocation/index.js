import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";

const SetLocation = () => {
  const navigation = useNavigation()
  const [region, setRegion] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
    latitudeDelta: 0.015,
    longitudeDelta: 0.0121,
  });
  const [locationDetails, setLocationDetails] = useState(false);
  const [marker, setMarker] = useState({
    latitude: 20.5937,
    longitude: 78.9629,
  });

  const handleGoBack = () => {
   navigation.goBack();
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.header}>
        <TouchableOpacity onPress={handleGoBack} style={styles.backButton}>
          <Icon name="arrow-back" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Choose location</Text>
      </View>

      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Search"
          onPress={(data, details = null) => {
            if (details) {
              const { lat, lng } = details.geometry.location;
              setLocationDetails(details);
              setRegion({
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              setMarker({
                latitude: lat,
                longitude: lng,
              });
            }
          }}
          fetchDetails={true}
          query={{
            key: 'AIzaSyCrp_cdGACkQLoL81H86IazaaL51Qy-jsc',
            language: 'en',
          }}
          styles={{
            container: {
              position: 'absolute',
              top: 10,
              width: 300,
              zIndex: 1,
              marginLeft:20
            },
            listView: { backgroundColor: 'white' },
          }}
        />

        <MapView
          provider={PROVIDER_GOOGLE}
          style={styles.map}
          region={region}
          onRegionChangeComplete={(region) => {
            setRegion(region);
          }}
        >
          <Marker coordinate={marker} />
        </MapView>

        <TouchableOpacity
          style={styles.doneButton}
          onPress={() => {
            if (locationDetails) {
              const { lat, lng } = locationDetails.geometry.location;
              setRegion({
                latitude: lat,
                longitude: lng,
                latitudeDelta: 0.015,
                longitudeDelta: 0.0121,
              });
              setMarker({
                latitude: lat,
                longitude: lng,
              });
            }
          }}
        >
          <Text style={styles.doneButtonText}>Done</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default SetLocation;
