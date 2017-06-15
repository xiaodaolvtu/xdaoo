import React, { Component } from 'react';
import { AppRegistry,Dimensions, View, SectionList, Text ,InteractionManager,TouchableWithoutFeedback} from 'react-native';

var {height, width} = Dimensions.get('window');
/*
    RippleColor
    bkColor;
    style;
    title
    props;
 */

export default class PullList extends Component {
    constructor(props){
        super(props)
        this.state = {test:'header'}
    }
    _onPress() {
        this.setState({test:this.state.test+'1'})
        // InteractionManager.runAfterInteractions(() => {
        //     this.props.onPress && this.props.onPress()
        // });
    }
    renderItem(item){
        return (<TouchableWithoutFeedback onPress={()=>this._onPress()}>
                    <View  style={{height:100,width:width-40,padding:30,backgroundColor:'red'}}>
                        <Text>{item.title}</Text>
                    </View>
                </TouchableWithoutFeedback>)
    }
    render() {
        const Header = (header)=>(
            <View >
                <Text>1231313</Text>
            </View>)
        return (
            <SectionList
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => this.renderItem(item)}
            renderSectionHeader={({section}) => <Header/>}
            sections={[
            { key: 's1', data: [
              {title: 'Item In Header Section', text: 'Section s1', key: '0'},
            ]},
            {key: 's2', data: [
              {noImage: true, title: 'First item', text: 'Section s2', key: '0'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '11'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '120'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '121'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '103'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '113'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '102a4'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '115'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '1032'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1221'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '0a'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1a'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10a'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1a1'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '1a20'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1a21'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10a3'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1a13'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '102aa4'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '11a5'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '103a2'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '12a21'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '0b'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10b'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b1'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '12b0'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b21'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10b3'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b13'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '102ba4'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b15'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10b32'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1b221'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '0ba'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1ba'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10ba'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1ba1'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '1ab20'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1ba21'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '10ba3'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '1ab13'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '102baa4'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '11ba5'},
              {noImage: true, title: 'First item', text: 'Section s2', key: '103ba2'},
              {noImage: true, title: 'Second item', text: 'Section s2', key: '12ba21'},
            ]},
          ]}
/>
        );
    }
}