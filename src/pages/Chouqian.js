import React, { Component } from 'react';

// JS 
const qianResults = [];


class Chouqian extends Component {
    render() {
        // console.log(this.props);
        console.log(this.props.location.image);
        return (
            <div style={{
                position: "absolute",
                left: 20,
                top: 70,
              }}>
                <h1 className="header-style" >chouqian</h1>
            </div>
        )

    }
}
 
export default Chouqian;