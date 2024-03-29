import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
export default class signup extends React.Component {
 render() {
 return (
    <View style={styles.container}>
    <View style={styles.vHeader}>
  <Text style={styles.txtHeader}> "SIGN-UP Form"</Text>
  <Text style={styles.txtHeader}> "Fashionku"</Text>
    </View>
  
    <Image
      style={styles.gambar}
      source={require("./avatar.png")}
      resizeMode="contain"
    />
    <View style={styles.vInput}>
                <View style={styles.itemInput}>
                  <Text>Username</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtUsername) => this.setState({Username:txtUsername})
                    }
                  />
            </View>
            <View style={styles.itemInput2}>
                  <Text>E-mail</Text>
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
                 <View style={styles.itemInput3}>
                  <Text>Confirm</Text>
                  <TextInput
                    style={styles.txtInput3}
                    keyboardType='default'
                    onChangeText ={
                      (txtConfirm) => this.setState({Confirm:txtConfirm})
                    }
                  />
            </View>
                    </View>
                    <View style={styles.vButton}>
                    <Button
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Menu')}
                    title="SIGN-UP"
                    accessibilityLabel="SIGN-UP"
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
        marginBottom:40,
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
    marginLeft:43
  },
  itemInput3 :{
    flexDirection:'row',
    marginTop:10,
    marginLeft:35,
    marginBottom:20,
  },
  txtInput:{
    width:200,
    height:30,
    borderWidth:1,
    marginLeft:10,
    backgroundColor:'white'

  },
  txtInput3:{
    width:200,
    height:30,
    backgroundColor:'white',
    borderWidth:1,
    marginLeft:10,
    marginBottom:20,
  },
  vButton: {
    width:200,
    height:40,
    marginTop:150,
    marginBottom:100,
    marginLeft:80,
    marginRight:100,
  },
  gambar: {
    height:100,
    width:100,
    marginBottom:20,
    marginLeft:120,
    marginRight:100,
  },
});
