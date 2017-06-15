import React, { Component } from 'react';
import { StyleSheet, View, TouchableNativeFeedback, Text ,InteractionManager,Dimensions,ScrollView} from 'react-native';
var {height, width} = Dimensions.get('window');

/*
    RippleColor
    bkColor;
    style;
    title
    props;
 */

export default class XdButton extends Component {
    constructor(props){
        super(props)
    }
    _onPress() {
        InteractionManager.runAfterInteractions(() => {
            this.props.onPress && this.props.onPress()
        });
    }
    onScroll(){
        console.log('scroll')
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <View style={{borderRadius:10,width:30,height:30,backgroundColor:'gray'}}></View>
                    <Text style={{fontSize:16}}>xxx</Text>
                </View>
                <ScrollView 
            showsVerticalScrollIndicator={false} style={styles.lister} contentContainerStyle={{flexGrow:1,paddingBottom:40}} onScrollCapture={()=>this.onScroll()} onScroll={()=>this.onScroll()} onResponderTerminationRequest={(env)=>false} >
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    <View style={{borderRadius:10,width:200,height:130,backgroundColor:'gray'}}></View>
                    
                </ScrollView>
                <View style={styles.footer}>
                    
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f6f6f6',
  },
  header: {
      backgroundColor: '#f1f1f1',
      paddingVertical:30,
      paddingHorizontal:16,
      height:100
  },
  lister: {
      maxHeight:height-100,
  },
  footer: {
  },
});
