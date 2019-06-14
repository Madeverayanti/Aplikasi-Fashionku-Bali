import React from "react";
import { View, Text,Button, StyleSheet, Image } from "react-native";
export default class Main extends React.Component {
  render() {
  return (
  <View style={styles.container}>
  <View style={styles.vHeader}>
  <Text style={styles.txtHeader}> "Pakaian Adat Bali"</Text>
  <Text style={styles.txtHeader}> "Fashionku"</Text>
  </View>

  <Image
    style={styles.gambar}
    source={require("./logo.png")}
    resizeMode="contain"
  />


  <View style={styles.vButton}>
  <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Signup')}
  title="SIGN-UP"
  accessibilityLabel="SIGN-UP"
  />
  </View>
  <View style={styles.vButton}>
  <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Login')}
  title="LOG-IN"
  accessibilityLabel="LOG-IN"
  />
  </View>
  </View>
  );
  }
  }
const styles = StyleSheet.create({
 container: {
   backgroundColor: '#008B8B',
   flex: 1
 },
 vHeader: {
   alignItems:'center',
   justifyContent:'center',
   marginTop:20,
   marginBottom:50,
 },
 txtHeader: {
   fontSize:30,

 },
 vButton: {
   marginLeft:50,
   marginRight:50,
   marginBottom:20,
  
 },
 gambar: {
   height:300,
   width:200,
   marginLeft:80,
   marginTop:-100,
 },
});
