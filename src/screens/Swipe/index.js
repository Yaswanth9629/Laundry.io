import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Swiper from 'react-native-swiper';
import styles from "./style";
import { useNavigation } from "@react-navigation/native";


const LaundrySwipe = () => {

  const navigation = useNavigation()
  return(
    <Swiper style={styles.wrapper}showsPagination={true} loop={false}dotStyle={styles.dot} activeDotStyle={styles.activeDot}>
      <View style={styles.slide}>
      <View style={styles.icon}>
         <Text style={styles.iconText}>Laundry.io</Text>
       </View>
      </View>
      <View style={styles.slide}>
        <Image source={require('../../assets/images/washing.jpg')} style={styles.image}/>
        <Text style={styles.title}>
          We clean your
          cloths
        </Text>
        <Text style={styles.subtitle}>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum
        </Text>
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus
            porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>

        <View style={styles.icon1}>
         <Text style={styles.iconText2}>Laundry.io</Text>
       </View>

      </View>

      <View style={styles.slide1}>

      <Image source={require('../../assets/images/washing.jpg')} style={styles.image1}/>
        <Text style={styles.title}>
          We clean your
          cloths
        </Text>
        <Text style={styles.subtitle}>
        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum
        </Text>
        <Text style={styles.description}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur blandit tempus
            porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
        
        <View style={styles.triangle}></View>
        <View style={styles.icon2}>
         <Text style={styles.iconText3}>Laundry.io</Text>
       </View>

       <TouchableOpacity style={styles.nextButton}
        onPress={()=>navigation.navigate('LoginPage')}>
            <Text style={styles.nextButtonText}>Next</Text>
          </TouchableOpacity>
      </View>
    </Swiper>
  )
}
export default LaundrySwipe;