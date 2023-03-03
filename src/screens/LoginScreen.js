import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { Image } from 'react-native-elements'
import { useNavigation } from '@react-navigation/native'
import LoginForm from '../components/acoount/LoginForm';

export default function loginScreen() {
  const navigation = useNavigation();
  //console.log(navigation);
  const irARegistro = ()=>{
    //console.log("ir a registro")
    navigation.navigate("registerS")
  }
  return (
    <View>
      <Image source={require("../../assets/imagenes/chae.jpg")}
      style={styles.Logo}
      />
      <View style={styles.contentForm}>
        <LoginForm/>
        <Text style={styles.text}>¿Aún no tienes cuenta? 
        <Text style={styles.textBtn} onPress={irARegistro}>
          {" "}
          Registrate</Text> </Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create(
  {
   Logo:{
      width:"100%",
      height:150,
      resizeMode:"contain",
      marginTop:30
    },
    contentForm:{
      marginHorizontal:30,

    },
    text:{
      marginTop:15,
      marginHorizontal:10
    },
    textBtn:{ 
      fontWeight: "bold",
      color: "#0D5BD7",
    }
  }
)