import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  TouchableNativeFeedback,
  Text,
  InteractionManager,
  Dimensions,
  ScrollView,
  TextInput,
  Image
  //ImageBackground 0.46
} from 'react-native'
var {height, width} = Dimensions.get('window');

/*
    RippleColor
    bkColor;
    style;
    title
    props;
 */

export default class Login extends Component {
    constructor(props){
        super(props)
    }
    _onPress() {
        InteractionManager.runAfterInteractions(() => {
            this.props.onPress && this.props.onPress()
        });
    }
    render() {

        return (
            <View style={styles.container} source={require("../../images/login.jpg")}>
                <View style={styles.header}>
                    <View style={{borderRadius:10,width:30,height:30,backgroundColor:'gray'}}></View>
                    <Text style={{fontSize:16,padding:5}}>xxx</Text>
                </View>
                <View style={styles.body}>
                  <View style={styles.box}>
                  <Text style={{color: 'black', width: 80,fontSize:  16 }}>用户名：</Text>
                  <TextInput style={{height: 30, width: 150,borderWidth: 0.5,borderColor: "rgba(0,0,0,0.5)",}}
                    placeholder={""}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    onChangeText={(text) => {this.setState({text})}}
                    onSubmitEditing={() => {this.setState({text: ''})}}
                    value={(this.state && this.state.text) || ''}
                  />
                </View>
                  <View style={styles.box}>
                  <Text style={{color: 'black', width: 80,fontSize:  16 }}>密码：</Text>
                  <TextInput style={{height: 30, width: 150,borderWidth: 0.5,borderColor: "rgba(0,0,0,0.5)",}}
                    placeholder={""}
                    placeholderTextColor={"rgba(198,198,204,1)"}
                    onChangeText={(text) => {this.setState({text})}}
                    onSubmitEditing={() => {this.setState({text: ''})}}
                    value={(this.state && this.state.text) || ''}
                  />
                </View>
                </View>
                <View style={styles.footer}>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#f8f8f8'
  },
  header: {
      paddingVertical:30,
      paddingHorizontal:16,
      height:100,
      backgroundColor:'#f8f8f8'
  },
  body: {
      height:height-100,
      paddingVertical:50,
      paddingHorizontal:16,
      backgroundColor:'#f8f8f8'
  },
  box: {flexDirection:'row',  alignItems: 'center',marginBottom:10},
  footer: {
  },
});
