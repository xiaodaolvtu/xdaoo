import React, { Component } from 'react';
import { AppRegistry, View, TouchableNativeFeedback, Text ,InteractionManager} from 'react-native';

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
    render() {

        return (
            <TouchableNativeFeedback
                onPress={()=>this._onPress()}
                background={TouchableNativeFeedback.Ripple(this.props.RippleColor || 'blue', false)}>
                <View style={{ justifyContent: 'center', alignItems: 'center', width: 200, height: 50, backgroundColor: this.props.bkColor || 'yellow' }}>
                    <Text style={this.props.txtStyle}>{this.props.title || 'Button'}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}