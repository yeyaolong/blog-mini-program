import { Component } from 'react'
import { View, Text, WebView } from '@tarojs/components'
import { AtButton } from 'taro-ui'

import './index.less'

interface MyProps {}
interface MyState {}

export default class Index extends Component<MyProps, MyState> {
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleMessage() {

  }

  render () {
    return (
      <View className='index'>
        <WebView src='https://yeyaolong.github.io/' onMessage={this.handleMessage}></WebView>
      </View>
    )
  }


}
