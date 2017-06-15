import React from 'react';
import {
  StyleSheet,
  Easing,
  Text,
  InteractionManager,
  LayoutAnimation,
  UIManager,
  View,
  PanResponder,
  Dimensions,
  TouchableOpacity,
  TouchableNativeFeedback,
  TouchableWithoutFeedback,
  Animated,
  Button,
  StatusBar,
  Image
} from 'react-native'
//import XdButton from './components/XdButton'
import LayoutAnimated from './views/components/LayoutAnimated'
import Main from './views/pages/Main'
import Left from './views/pages/Left'
import Login from './views/pages/Login'
import Content from './views/pages/Content'
import NavgatorBar  from './views/components/NavgatorBar'
UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
// stateID - 触摸状态的ID。在屏幕上有至少一个触摸点的情况下，这个ID会一直有效。
// moveX - 最近一次移动时的屏幕横坐标
// moveY - 最近一次移动时的屏幕纵坐标
// x0 - 当响应器产生时的屏幕坐标
// y0 - 当响应器产生时的屏幕坐标
// dx - 从触摸操作开始时的累计横向路程
// dy - 从触摸操作开始时的累计纵向路程
// vx - 当前的横向移动速度 可以根据正负值判断方向
// vy - 当前的纵向移动速度
// numberActiveTouches - 当前在屏幕上的有效触摸点的数量
var CustomLayoutLinear = {
  duration: 400,
  create: {
    type: LayoutAnimation.Types.easeIn,
    property: LayoutAnimation.Properties.scaleXY,
  },
  update: {
    //type: LayoutAnimation.Types.curveEaseInEaseOut,
    type: LayoutAnimation.Types.spring
  },

};
var CustomLayoutModal = {
  duration: 100,
  create: {
    type: LayoutAnimation.Types.easeInEaseOut,
    property: LayoutAnimation.Properties.opacity,
  },
  update: {
    //type: LayoutAnimation.Types.curveEaseInEaseOut,
    type: LayoutAnimation.Types.spring
  },

};

var {height, width} = Dimensions.get('window');
const startPaddingX = 20, startX = startPaddingX, moveX = 20; //左手势区
const startXR = width - startPaddingX, moveXR = -20; //左手势区
const sideW = 300, sideStartX = sideW - 30, sideMoveX = -30
const initPosR = width - sideW

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = { pop: false, left: new Animated.Value(0), width: 0, height: 0, fullView: false, content: {}, reading: false }
  }
  componentWillMount() {
    StatusBar.setHidden(false);
    StatusBar.setBackgroundColor = 'red'
    this._panResponder = PanResponder.create({
      // 要求成为响应者：
      onStartShouldSetPanResponder: (evt, gestureState) => { evt.bubbles = true; return !(this.pop || this.popR) || this.touch },

      onPanResponderGrant: (evt, gestureState) => {
        this.x0 = gestureState.x0;
        this.isInLeftTouch = this.x0 < startPaddingX;
        this.isInRightTouch = this.x0 > (width - startPaddingX)
        if (this.isInLeftTouch || this.isInLeftTouch) this.touch = true

      },
      onPanResponderMove: (evt, gestureState) => {
        if (this.x0 < startX && gestureState.dx > moveX) {
          this.pop = true;
          this.setState({ pop: true })
          this.refs.leftMenu.setVisualble(true)
          this.refs.leftMenu.onUpdate(gestureState.dx)
        }
        else if (this.x0 > startXR && gestureState.dx < moveXR) {
          this.popR = true;
          this.setState({ popR: true })
          this.refs.rightMenu.setVisualble(true)
          this.refs.rightMenu.onUpdate(gestureState.dx)
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        this.touch = false
        if (this.isInLeftTouch) {
          if (gestureState.vx < 0) this.refs.leftMenu.closePanel()
          else this.refs.leftMenu.openPanel()
        }
        else if (this.isInRightTouch) {
          if (gestureState.vx > 0) this.refs.rightMenu.closePanel()
          else this.refs.rightMenu.openPanel()
        }

      },

    });
  }

  setVisualble(v) {
    this.pop = v; this.popR = v
    this.setState({ pop: v, popR: v })
  }
  test() {
    // LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
    LayoutAnimation.configureNext(CustomLayoutLinear);
    //this.setState({content:!this.state.content})
    //
    //           <XdButton bkColor='#fff' RippleColor='green' txtStyle={{color:'green',fontSize:24}} onPress={()=>this.test()}/>
    if (this.state.height > 200) this.setState({ width: 0, height: 0 })
    else this.setState({ width: this.state.width + 100, height: this.state.height + 100 })
  }
  setContent(status, content = {}) {
    status ? this.setState({ reading: true, content: content }) : this.setState({ reading: false, content: {} })
  }
  leftPress(){
    this.setVisualble(true)
    this.refs.leftMenu.setVisualble(true)
    this.refs.leftMenu.openPanel()
  }
  rightPress(){
    this.setVisualble(true)
    this.refs.rightMenu.setVisualble(true)
    this.refs.rightMenu.openPanel()
  }
  render() {
    return (
      <View style={{ flexGrow: 1, backgroundColor: '#fff', }}>
        <View style={styles.container}  {...this._panResponder.panHandlers}>
          <NavgatorBar title={'xxxxs'} back={()=>this.back()}>
            <Button title="left" onPress={()=>this.leftPress()}/>
            <Button title="right" onPress={()=>this.rightPress()}/>
          </NavgatorBar>
        </View>
        <View style={this.state.fullScreen ? { flexGrow: 1, justifyContent: 'center', alignItems: 'center' } : { ...StyleSheet.absoluteFillObject, left: 20, top: 60, width: width - 40, backgroundColor: '#fff' }}>
          <Main callback={(status, content) => this.setContent(status, content)} />
        </View>
        {this.state.popR && <View  source={require("./images/login.jpg")} style={{ position: 'absolute', top: 0,width:width,height:height ,backgroundColor:'black' ,opacity:0.3}}></View>}
        <AnimatedWrap ref="leftMenu" type='left' menuWidth={300} setVisual={(v) => this.setVisualble(v)} style={{ position: 'absolute', top: 0 }}>
          <Left />
        </AnimatedWrap>
        <AnimatedWrap ref="rightMenu" type='right' menuWidth={300} setVisual={(v) => this.setVisualble(v)} style={{ position: 'absolute', top: 0 }}>
          <Login />
        </AnimatedWrap>

        {this.state.reading && <View style={{ position: 'absolute', top: 0,  }}><Content post={this.state.content} back={() => this.setContent()} /></View>}
      </View>

    );
  }
}

const AnimatedWrap = class extends React.Component {
  constructor(props) {
    super(props);
    this.type = this.props.type
    let left = 0;
    this.type == 'left' ? left = 0 - this.menuWidth : left = 0;
    this.menuWidth = this.props.menuWidth || 300;
    this.state = { left: new Animated.Value(left) }
  }
  recovery(gestureState) {
    if (!gestureState) return this.openPanel()  //原生组件响应式恢复状态
    if (this.type == 'left') {
      if (gestureState.vx > 0) this.openPanel()
      else this.closePanel()
    }
    else {
      if (gestureState.vx < 0) this.openPanel()
      else this.closePanel()

    }
  }
  componentWillMount() {
    this._panResponder2 = PanResponder.create({
      onMoveShouldSetResponderCapture: (evt) => true,
      onStartShouldSetPanResponderCapture: (evt) => false,
      onShouldBlockNativeResponder: (evt) => {
        return true
      },
      onStartShouldSetPanResponder: (evt, gestureState) => {
        this.x0 = evt.nativeEvent.locationX; //first touch position 
        evt.bubbles = true;
        return this.pop

      },
      onPanResponderEnd: (evt, gestureState) => {
        //非release，响应被截断时会被调用
        /*当滑动速度小于1，且滑动距离较小时，恢复侧边栏显示
          否则，按照当前滑动方向，关闭或开启侧边栏
        */
        if (Math.abs(gestureState.vx) < 1 && Math.abs(gestureState.dx) < 60) this.recovery()
        else this.recovery(gestureState)
        return true
      },
      onPanResponderMove: (evt, gestureState) => {
        if (gestureState.dx < this.menuWidth && gestureState.dx + this.x0 < (this.menuWidth - 30)) {
          this.onPull(gestureState.dx)
        }
        else if (gestureState.dx + this.x0 > (this.menuWidth - 30)) {
          this.onPull(this.menuWidth)
        }
      },

      onPanResponderRelease: (evt, gestureState) => {
        this.recovery(gestureState)
      }

    });
  }
  onUpdate(value) {
    //this.setState({left:value})
    let left;
    if (this.type == "left") {
      left = value - this.menuWidth //初始位置
      if (left > 0) return;
    }
    else {
      left = width + value + 20;
      if (left < (width - this.menuWidth)) return;
    }

    this.state.left.setValue(left);
  }
  onPull(value) {
    let left; //left偏移值
    if (this.props.type == 'left') {//左菜单
      left = value //初始位置
      if (left > 0) return;
    }
    else {
      left = width - this.menuWidth + value
      if (left < (width - this.menuWidth)) return;  //完全展开后则不再移动
    }
    this.state.left.setValue(left);
  }
  openPanel() {
    let toVal;
    if (this.type == 'left') toVal = 0;
    else toVal = width - this.menuWidth;


    // Animated.timing(  
    //   this.state.left,
    //   {
    //     toValue: toVal, 
    //     duration: 300, 
    //   },
    // ).start();

    Animated.spring(
      this.state.left,
      {
        toValue: toVal,
        duration: 200,
        create: {
          type: LayoutAnimation.Types.easeIn,
          property: LayoutAnimation.Properties.scaleXY,
        },
        update: {
          //type: LayoutAnimation.Types.curveEaseInEaseOut,
          type: LayoutAnimation.Types.spring
        }
      }
    ).start();


    InteractionManager.runAfterInteractions(() => {
      this.props.setVisual && this.props.setVisual(true)
    });
  }
  closePanel() {
    let toVal;
    if (this.type == 'left') toVal = 0 - this.menuWidth;
    else toVal = width;
    // Animated.timing(  
    //   this.state.left,
    //   {
    //     toValue: toVal, 
    //     duration: 300, 
    //     easing:Easing.cubic
    //   },
    // ).start();
    this.props.setVisual && this.props.setVisual(false) 
    Animated.spring(
      this.state.left,
      {
        toValue: toVal,
        duration: 200,
        create: {
          type: LayoutAnimation.Types.easeOut,
          property: LayoutAnimation.Properties.scaleXY,
        },
        update: {
          //type: LayoutAnimation.Types.curveEaseInEaseOut,
          type: LayoutAnimation.Types.spring
        }
      }
    ).start();
    InteractionManager.runAfterInteractions(() => {
      this.props.setVisual && this.props.setVisual(false) //关闭回调
    });
  }
  setVisualble(visual) {
    this.pop = visual;
    this.setState({ pop: visual })
  }
  render() {
    if (this.state.pop)
      return (
        <Animated.View style={[{ left: this.state.left, width: sideW, }, this.props.style]}  {...this._panResponder2.panHandlers}>
          {this.props.children}
        </Animated.View>)
    else return null
  }
}










const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  sideWrap: {
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
});
