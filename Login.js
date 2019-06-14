import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
export default class Login extends React.Component {
 render() {
 return (
    <View style={styles.container}>
    <View style={styles.vHeader}>
  <Text style={styles.txtHeader}> "Login Form"</Text>
  <Text style={styles.txtHeader}> "Fashionku"</Text>
    </View>
  
    <Image
      style={styles.gambar}
      source={require("./fotoku.jpg")}
      resizeMode="contain"
    />
    <View style={styles.vInput}>
    <View style={styles.itemInput2}>
                  <Text>Username</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtEmail) => this.setState({Email:txtEmail})
                    }
                  />
            </View>
              <View style={styles.itemInput}>
                  <Text>Password</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtPassword) => this.setState({Password:txtPassword})
                    }
                  />
                    </View>
                    </View>
                    <View style={styles.vButton}>
                    <Button
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Menu')}
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
        color:'black'
      },
 vInput:{
    flex:2,
  },
  itemInput :{
    flexDirection:'row',
    marginTop:10,
    marginLeft:20
  },
  itemInput2 :{
    flexDirection:'row',
    marginTop:10,
    marginLeft:20
  },
  txtInput:{
    width:200,
    height:30,
    backgroundColor :'white',
    borderWidth:1,
    marginLeft:10
  },
  vButton: {
    width:200,
    height:40,
    marginTop:20,
    marginBottom:100,
    marginLeft:80,
    marginRight:100,
  },
  gambar: {
    height:170,
    width:150,
    marginBottom:50,
    marginLeft:120,
    marginRight:100,
  },
});
