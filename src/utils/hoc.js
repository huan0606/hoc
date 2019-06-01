import React, {
  Component
} from 'react'
//传入一个组件，返回一个扩展过得组件
const WrapComponent = (cbk) =>{
return (Wrap) => {
  return class extends Component {
    state = {
      list: {
        NewCom: {
          title: 'NewCom里的数据'
        },
        TwoSon: {
          title: 'TwoSon里的数据'
        }
      }
    }
    render() {
        let res = cbk(this.state.list)
      return <Wrap {...this.props} {...res}/>
    }
  }
}
}
export default WrapComponent
