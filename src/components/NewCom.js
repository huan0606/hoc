import React, { Component } from 'react';
import Hoc from '../utils/hoc'
class NewCom extends Component {
    render() {
        console.log(this.props.title)
        return (
            <div>
                {this.props.title}
            </div>
        );
    }
}

export default Hoc((res)=>{
    return res.NewCom
})(NewCom);