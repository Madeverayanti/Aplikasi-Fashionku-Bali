import React from "react";
import { View, Text,Button, StyleSheet, Image } from "react-native";
export default class Menu extends React.Component {
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
  onPress={() => this.props.navigation.navigate('Data Pakaian')}
  title="Data Pakaian"
  accessibilityLabel="Data Pakaian"
  />
  </View>
  <View style={styles.vButton}>
  <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Kategori Pakaian')}
  title="Kategori Pakaian"
  accessibilityLabel="Kategori Pakaian"
  />
  </View>
  <View style={styles.vButton}>
  <Button
  color="orange"
  onPress={() => this.props.navigation.navigate('Tentang Kami')}
  title="Tentang Kami"
  accessibilityLabel="Tentang Kami"
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
   color:'black'
 },
 vButton: {
   marginTop:20,
   marginLeft:50,
   marginRight:50,
   marginBottom:20,
 },
 gambar: {
  height:300,
   width:200,
   marginLeft:80,
   marginTop:-100,
   marginBottom:-40,
 },
});
