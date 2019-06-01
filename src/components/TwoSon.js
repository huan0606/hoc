import React, { Component } from 'react';
import Hoc from '../utils/hoc'
class TwoSon extends Component {
    render() {
        return (
            <div>
               {this.props.name}
               {this.props.title}
            </div>
        );
    }
}

export default Hoc((res)=>{
    return res.TwoSon
})(TwoSon);