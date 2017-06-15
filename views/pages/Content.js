import React, { Component } from 'react';
import { AppRegistry, Dimensions, View, SectionList, Text, ScrollView, InteractionManager, TouchableWithoutFeedback, LayoutAnimation, TouchableOpacity } from 'react-native';
import NavgatorBar  from '../components/NavgatorBar'

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

const test = `Created an app with create-react-native-app, how to publish it to the Google Play Store?
2 分钟

With projects created using create-react-native-app you have two paths to the Google Play Store.
Use the Expo exp build command

One path is to use the Expo (a project I work on) exp command-line tool to build the APK. The exp command-line tool (and XDE GUI program) can load projects created with CRNA. After getting set up, you can run exp build:android and receive an APK in a few minutes.

The first time you do this, you'll have to add some information to expo.json or app.json (whichever you have) that's required for the APK. Specifically you need to specify the Java package name like this (it's important it's a valid Java package name!):

`
export default class Content extends Component {
    constructor(props) {
        super(props)
    }
    back(){
        this.props.back && this.props.back()
    }
    render() {
        return (
            <View style={{ flexGrow: 1, width: width, height: height, backgroundColor: '#fff' }}>
                <NavgatorBar title={this.props.post.title} back={() => this.back()}/>
                
                <ScrollView>
                    <Text>{this.props.post.summary}</Text>
                </ScrollView>
            </View>
        );
    }
}