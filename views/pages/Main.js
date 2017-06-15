import React, { Component } from 'react';
import { AppRegistry,Dimensions, View, FlatList, Text,ScrollView ,InteractionManager,TouchableWithoutFeedback,LayoutAnimation,TouchableOpacity} from 'react-native';

var {height, width} = Dimensions.get('window');
/*
    RippleColor
    bkColor;
    style;
    title
    props;
 */

const test = `Created an app with create-react-native-app, how to publish it to the Google Play Store?
2 分钟

With projects created using create-react-native-app you have two paths to the Google Play Store.
Use the Expo exp build command

One path is to use the Expo (a project I work on) exp command-line tool to build the APK. The exp command-line tool (and XDE GUI program) can load projects created with CRNA. After getting set up, you can run exp build:android and receive an APK in a few minutes.

The first time you do this, you'll have to add some information to expo.json or app.json (whichever you have) that's required for the APK. Specifically you need to specify the Java package name like this (it's important it's a valid Java package name!):


`
var CustomLayoutLinear = {
    duration: 100,
    create: {
      type: LayoutAnimation.Types.linear,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {
      //type: LayoutAnimation.Types.curveEaseInEaseOut,
      type: LayoutAnimation.Types.linear
    },

  };
export default class Main extends Component {
    constructor(props){
        super(props)
        this.state = {test:'header'}
    }
    key = null;
    _onPress(item) {
        const that = this
        if(!item) return;
        this.key = (item||{}).key
        this.props.callback&&this.props.callback('open',item)
        this.props.fullScreen&&this.props.fullScreen(true)
        LayoutAnimation.configureNext(CustomLayoutLinear);
        this.setState({content:item,reading:true,test:''})
        // InteractionManager.runAfterInteractions(() => {
        //     this.props.onPress && this.props.onPress()
        // });
    }
    close(){
        this.props.fullScreen&&this.props.fullScreen(false)
        this.setState({reading:false})
        this.key = null

    }
    // onPressIn() {
    //     this.startTime = new Date().getTime()
    // }
    // onPressOut(){
    //     console.warn(new Date().getTime()-this.startTime)
    //     if(new Date().getTime()-this.startTime<500){
    //         this.close()
    //     }
    // }

    renderItem(item) {
        return (
            <TouchableWithoutFeedback onPress={ () => this._onPress(item)}>
                <View style={[{ height: 100, width: width, paddingVertical:30, paddingHorizontal:16, backgroundColor: '#fff', }]}>
                    <Text>{item.title}</Text>
                </View>
            </TouchableWithoutFeedback>
        )
    }
    render() {
        const Header = (title,key)=>(
            <View key={key}>
                <Text>{title}</Text>
            </View>)
            //renderSectionHeader={({section}) => Header(section.title,section.key)}
        return (
            <View style={{flexGrow:1}}>

            <FlatList
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => this.renderItem(item)}
            data={[ 
              {noImage: true, title: 'First item', summary: 'Section s2', key: '0'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '11'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '120'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '121'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '103'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '113'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '102a4'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '115'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '1032'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1221'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '0a'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1a'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10a'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1a1'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '1a20'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1a21'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10a3'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1a13'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '102aa4'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '11a5'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '103a2'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '12a21'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '0b'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10b'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b1'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '12b0'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b21'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10b3'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b13'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '102ba4'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b15'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10b32'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1b221'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '0ba'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1ba'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10ba'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1ba1'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '1ab20'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1ba21'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '10ba3'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '1ab13'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '102baa4'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '11ba5'},
              {noImage: true, title: 'First item', summary: 'Section s2', key: '103ba2'},
              {noImage: true, title: 'Second item', summary: 'Section s2', key: '12ba21'},
          ]}
/>

</View>
        );
    }
}