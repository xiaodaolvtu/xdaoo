import React, { Component } from 'react';
import { Dimensions, View, Text, InteractionManager, TouchableWithoutFeedback, LayoutAnimation, TouchableOpacity,StatusBar,Button, } from 'react-native';

var {height, width} = Dimensions.get('window');
/*
fetch:
    content:
props:
    title:
    image:
    date:
    summary
 */
const statusBarH = StatusBar.currentHeight|16
const navH = 40+statusBarH
const styles = {
    wrap:{ width: width, height: navH,paddingTop:statusBarH, backgroundColor: '#e0e0e0',paddingHorizontal:16, flexDirection:'row' ,justifyContent: 'space-between', alignItems: 'center'},

}
export default class NavgatorBar extends Component {
    constructor(props) {
        super(props)
        if(this.props.children&&this.props.children.length>2) throw TypeError("NavigatorBar 最多只能拥有两个子节点!")
    }
    render() {
        return (
            <View style={styles.wrap}>
                <View style={{position:'absolute',top:statusBarH,left:0,width:width,height:navH-statusBarH,justifyContent:'center', alignItems: 'center'}}><Text>{this.props.title||'xxx'}</Text></View>
                {this.props.children?this.props.children:this.props.back&&<Button title='X' onPress={()=>this.props.back()}></Button>}
            </View>
        );
    }
}