import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Button } from 'react-native';
export default class signup extends React.Component {
 render() {
 return (
    <View style={styles.container}>
    <View style={styles.vHeader}>
  <Text style={styles.txtHeader}> "Profile Saya"</Text>
    </View>
  
    <Image
      style={styles.gambar}
      source={require("./fotoku.jpg")}
      resizeMode="contain"
    />
    <View style={styles.vInput}>
                <View style={styles.itemInput}>
                  <Text>Nama</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtNama) => this.setState({Nama:txtNama})
                    }
                  />
            </View>
            <View style={styles.itemInput2}>
                  <Text>TTL</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtTTL) => this.setState({TTL:txtTTL})
                    }
                  />
            </View>
              <View style={styles.itemInput}>
                  <Text>Alamat</Text>
                  <TextInput
                    style={styles.txtInput}
                    keyboardType='default'
                    onChangeText ={
                      (txtAlamat) => this.setState({Alamat:txtAlamat})
                    }
                  />
                 </View>
                 <View style={styles.itemInput3}>
                  <Text>Telepon</Text>
                  <TextInput
                    style={styles.txtInput3}
                    keyboardType='default'
                    onChangeText ={
                      (txtTelepon) => this.setState({Telepon:txtTelepon})
                    }
                  />
            </View>
                    </View>

                    <View style={styles.vButton}>
                    <Button
                    color="orange"
                    onPress={() => this.props.navigation.navigate('Menu')}
                    title="Kembali"
                    accessibilityLabel="Kembali"
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
    marginLeft:45
  },
  itemInput2 :{
    flexDirection:'row',
    marginTop:10,
    marginLeft:60
  },
  itemInput3 :{
    flexDirection:'row',
    marginTop:10,
    marginLeft:40,
    marginBottom:20,
  },
  txtInput:{
    width:200,
    height:30,
    borderWidth:1,
    marginLeft:30,
    backgroundColor:'white'

  },
  txtInput3:{
    width:200,
    height:30,
    backgroundColor:'white',
    borderWidth:1,
    marginLeft:30,
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
    height:170,
    width:150,
    marginBottom:20,
    marginLeft:120,
    marginRight:100,
  },
});
